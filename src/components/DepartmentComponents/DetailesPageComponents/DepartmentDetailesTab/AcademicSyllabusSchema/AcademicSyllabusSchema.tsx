"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { FileText } from "lucide-react";

// Configure pdfjs worker to run in browser
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export interface SyllabusItem {
  id: number;
  name?: string;
  title?: string;
  category?: string;
  pdfUrl?: string;
}

interface AcademicSyllabusSchemaProps {
  departmentName: string;
  data: SyllabusItem[];
  loading?: boolean;
}

// 1. Move fallbacks OUTSIDE the component so React doesn't recreate these objects every render cycle
const LoadingFallback = (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 transition-colors animate-pulse">
    <FileText className="w-8 h-8" />
  </div>
);

const ErrorFallback = (
  <div className="absolute inset-0 flex items-center justify-center bg-red-50 text-red-500 transition-colors">
    <FileText className="w-8 h-8" />
  </div>
);

// Memoized PDF component
const PdfThumbnail = React.memo(({ pdfUrl }: { pdfUrl: string }) => {
  // 2. Memoize the file prop to give react-pdf a strictly stable reference
  const file = useMemo(() => (pdfUrl !== "#" ? pdfUrl : null), [pdfUrl]);

  return (
    <Document
      file={file}
      loading={LoadingFallback}
      error={ErrorFallback}
      className="w-full h-full"
    >
      <Page
        pageNumber={1}
        width={160}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        className="w-full h-full [&>canvas]:!w-full [&>canvas]:!h-full [&>canvas]:!object-cover"
      />
    </Document>
  );
});

PdfThumbnail.displayName = "PdfThumbnail";

const AcademicSyllabusSchema: React.FC<AcademicSyllabusSchemaProps> = ({ departmentName, data, loading = false }) => {
  const groupedEditions = useMemo(() => {
    const groups: Record<string, SyllabusItem[]> = {};
    data.forEach((item) => {
      const catName = item.category || "General Syllabus";
      if (!groups[catName]) groups[catName] = [];
      groups[catName].push(item);
    });
    return groups;
  }, [data]);

  if (loading) return <div className="py-10 text-center text-gray-500">Loading syllabus documents...</div>;
  if (data.length === 0) return <div className="py-10 text-center text-gray-500">No syllabus or schema documents found.</div>;

  return (
    <div className=" w-full pb-10">
      <h2 className="text-2xl text-center md:text-start font-semibold text-[#1D1D1F] mb-4">Academic Syllabus & Schema</h2>

      {Object.entries(groupedEditions).map(([editionName, editionItems]) => (
        // 3. Changed key from `idx` to the unique `editionName`
        <div key={editionName} className=" pb-6">
          <h3 className="text-[20px] font-bold text-textGray mb-2">{editionName}</h3>

          <div className="flex flex-row flex-wrap gap-6 mt-2">
            {editionItems.map((item, i) => {
              const pdfUrl = item.pdfUrl ? `${process.env.NEXT_PUBLIC_API_URL}/academic-syllabus/file/${item.pdfUrl}` : "#";

              return (
                <motion.div
                  // 4. Changed key from `i` (index) to `item.id`. This is the most crucial fix!
                  key={item.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col w-40"
                >
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105">
                    <div className="w-40 h-48 overflow-hidden rounded shadow bg-gray-100 relative group">
                      <PdfThumbnail pdfUrl={pdfUrl} />
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcademicSyllabusSchema;