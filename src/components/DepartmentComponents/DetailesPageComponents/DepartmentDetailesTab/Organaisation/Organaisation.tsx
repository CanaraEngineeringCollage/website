import React from 'react';

interface OrganaisationTableColumn {
  title: string[]; // Shared heading for both columns
  data: string[];
}

interface OrganaisationTable {
  title: string;
  firstColumn: OrganaisationTableColumn[];
  secondColumn: OrganaisationTableColumn[];
}

interface Organaisation {
  title: string;
  imageUrl: string;
  table: OrganaisationTable[];
}

const Organaisation = ({ data }: { data: Organaisation }) => {
  return (
    <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
    { data.title&& <h2 className="text-2xl font-bold mb-4">{data.title}</h2>}
      <img
        src={data.imageUrl}
        alt={data.title}
        className="mb-6 max-w-full h-auto"
      />

     {data.table.map((table, tableIdx) => (
  <div key={tableIdx} className="mb-10">
    {table.title && (
      <h3 className="text-xl font-semibold mb-3">{table.title}</h3>
    )}
    <div className="overflow-x-auto">
      <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
        <tbody className="bg-[#F3F8FC] text-[#2884CA]">
          {table.firstColumn.map((firstCol, colIdx) => {
            const secondCol = table.secondColumn[colIdx];
            const maxLength = Math.max(
              firstCol?.data.length || 0,
              secondCol?.data.length || 0
            );

            return (
              <React.Fragment key={colIdx}>
                {/* Shared heading row */}
                {firstCol.title.length > 0 && (
                  <tr>
                    <td
                      colSpan={2}
                      className="py-3 md:px-4 px-1 border-b text-center"
                    >
                      {firstCol.title.join(', ')}
                    </td>
                  </tr>
                )}

                {/* Data rows */}
                {Array.from({ length: maxLength }).map((_, rowIdx) => (
                  <tr key={rowIdx}  className="text-textGray">
                    <td className="py-3 md:px-4 px-1 border-b">
                      {firstCol.data[rowIdx] || ''}
                    </td>
                    <td className="py-3 md:px-4 px-1 border-b">
                      {secondCol?.data[rowIdx] || ''}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
))}

    </div>
  );
};

export default Organaisation;
