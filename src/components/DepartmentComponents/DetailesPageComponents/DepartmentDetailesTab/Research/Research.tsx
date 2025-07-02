import React from 'react';

type TableData = {
  title: string[];
  slNo?: string; // if truthy, show serial number column
  firstColumn: string[];
  secondColumn: string[];
  thirdColumn: string[];
  fourthColumn: string[];
};

type MoreDetailsTableData = {
  domain: string;
  faculty: string[];
  researchScholars: string[];
  year?: string; // Optional year field
};

type ResearchData = {
  heading: string;
  points: string[];
  imageUrl?: string;
  table?: TableData[];
  moreDetailesTable?: MoreDetailsTableData[];
  th?: string[];
};

type ResearchProps = {
  data: ResearchData[];
};

const Research: React.FC<ResearchProps> = ({ data }) => {
  return (
    <div className="lg2:px-10 mx-5 text-[#86868B] text-[17px]">
      {data.map((section, idx) => {
        // Only render section if there is relevant data (heading, points, image, or tables)
        const hasData =
          section.heading ||
          section.points.length > 0 ||
          section.imageUrl ||
          (section.table && section.table.some(t => 
            t.firstColumn.length > 0 || 
            t.secondColumn.length > 0 || 
            t.thirdColumn.length > 0 || 
            t.fourthColumn.length > 0
          )) ||
          (section.moreDetailesTable && section.moreDetailesTable.length > 0);

        if (!hasData) return null;

        return (
          <div key={idx} className="mb-8">
            {section.heading && (
              <h2 className="font-bold text-xl mb-2">{section.heading}</h2>
            )}

            {section.points.length > 0 && (
              <ul className="list-disc ml-6 mb-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {section.imageUrl && (
              <img
                src={section.imageUrl}
                alt={section.heading || 'Image'}
                className="my-4 max-w-full"
              />
            )}

            {section.table &&
              section.table.map((table, tIdx) => {
                // Determine the number of columns based on non-empty data
                const columns = [
                  table.firstColumn,
                  table.secondColumn,
                  table.thirdColumn,
                  table.fourthColumn,
                ].filter(col => col.length > 0).length;
                if (columns === 0) return null;

                const maxRows = Math.max(
                  table.firstColumn.length,
                  table.secondColumn.length,
                  table.thirdColumn.length,
                  table.fourthColumn.length
                );
                const showSlNo = !!table.slNo;
                const showHeader = Array.isArray(table.title) && table.title.length > 0;

                return (
                  <table key={tIdx} className="w-full border mt-4">
                    {showHeader && (
                      <thead>
                        <tr>
                          {showSlNo && <th className="border px-2 py-1 text-center">Sl.No</th>}
                          {table.title.slice(0, columns + (showSlNo ? 1 : 0)).map((title, i) => (
                            <th key={i} className="border px-2 py-1">{title}</th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {Array.from({ length: maxRows }).map((_, rowIdx) => (
                        <tr key={rowIdx}>
                          {showSlNo && (
                            <td className="border px-2 py-1 text-center">{rowIdx + 1}</td>
                          )}
                          {table.firstColumn[rowIdx] && (
                            <td className="border px-2 py-1">{table.firstColumn[rowIdx]}</td>
                          )}
                          {table.secondColumn[rowIdx] && (
                            <td className="border px-2 py-1">{table.secondColumn[rowIdx]}</td>
                          )}
                          {table.thirdColumn[rowIdx] && (
                            <td className="border px-2 py-1">{table.thirdColumn[rowIdx]}</td>
                          )}
                          {table.fourthColumn[rowIdx] && (
                            <td className="border px-2 py-1">{table.fourthColumn[rowIdx]}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              })}

            {section.moreDetailesTable && section.moreDetailesTable.length > 0 && (
              <table className="w-full border mt-4">
                <thead>
                  <tr>
                    {section.th?.map((item, idx) => (
                      <th key={idx} className="border px-2 py-1">{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.moreDetailesTable.map((row, i) => (
                    <tr key={i}>
                      {row.year && <td className="border px-2 py-1">{row.year}</td>}
                      <td className="border px-2 py-1">{row.domain}</td>
                      <td className="border px-2 py-1">{row.faculty.join(', ')}</td>
                      <td className="border px-2 py-1">{row.researchScholars.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Research;