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
      <table className="min-w-full border border-gray-300 text-left">
        <tbody>
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
                      className="border border-gray-300 font-semibold  px-4 py-2 bg-gray-100 text-center"
                    >
                      {firstCol.title.join(', ')}
                    </td>
                  </tr>
                )}

                {/* Data rows */}
                {Array.from({ length: maxLength }).map((_, rowIdx) => (
                  <tr key={rowIdx}>
                    <td className="border border-gray-300 px-4 py-2">
                      {firstCol.data[rowIdx] || ''}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
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
