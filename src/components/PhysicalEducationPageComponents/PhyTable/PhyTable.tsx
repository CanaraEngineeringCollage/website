import React from "react";

interface ModelTableProps {
  headers: string[];
  rows: string[][];
  title: string;
}

const ModelTable: React.FC<ModelTableProps> = ({ title, headers, rows }) => {
  return (
    <div className="pb-10">
      {" "}
      <h1 className="text-3xl text-start md:text-[40px] lg2:text-4xl xl:text-6xl mb-5 font-bold">{title}</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
          <thead className="bg-[#F3F8FC] text-[#2884CA]">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="py-3 md:px-4 px-1 border-b">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-textGray">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} >
                <td  className="py-3 md:px-4 px-1 border-b">{rowIndex + 1}.</td>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-3 md:px-4 px-1 border-b">
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
