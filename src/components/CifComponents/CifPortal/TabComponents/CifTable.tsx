import React from "react";

const CifTable = ({ title, data }: { title: string; data: any }) => {
  return (
    <div className="overflow-x-auto lg:pe-5">
      <h2 className="text-[20px] font-bold text-textGray mb-4">{title}</h2>
      <div className="rounded overflow-hidden border border-gray-200 w-full min-w-[700px]">
        <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
          <thead>
            <tr className="bg-[#F3F8FC] text-[#2884CA]">
              <th className="py-3 md:px-4 px-2 border-b">Sl No</th>
              <th className="py-3 md:px-4 px-2 border-b">Event Name</th>
              <th className="py-3 md:px-4 px-2 border-b">Date</th>
              <th className="py-3 md:px-4 px-2 border-b">Resource Person(s)</th>
              <th className="py-3 md:px-4 px-2 border-b">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item: any, idx: number) => (
              <tr key={idx} className="text-textGray align-top">
                <td className="py-3 md:px-4 px-2 border-b">{item.slNo}</td>
                <td className="py-3 md:px-4 px-2 border-b">{item.eventName}</td>
                <td className="py-3 md:px-4 px-2 border-b whitespace-nowrap">{item.date}</td>
                <td className="py-3 md:px-4 px-2 border-b">{item.resourcePerson}</td>
                <td className="py-3 md:px-4 px-2 border-b leading-snug">{item.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CifTable;
