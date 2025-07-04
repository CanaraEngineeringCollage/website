import React from "react";

interface ModelTableProps {
  headers: string[];
  rows: string[][];
  title:string
}

const ModelTable: React.FC<ModelTableProps> = ({ title,headers, rows }) => {
  return (
    <div className="pb-10"> <h1 className="text-3xl leading-[1.3] md:text-[40px] mb-8 lg2:text-5xl xl:text-6xl font-bold">{title}</h1>
    <div className="overflow-x-auto border rounded">
       
      <table className="min-w-full  text-sm text-left table-auto">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 font-semibold text-gray-700 border">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              <td className="px-4 py-2 border">{rowIndex + 1}.</td>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 border">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ModelTable;
