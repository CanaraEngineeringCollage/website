"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { FileText } from "lucide-react";

// Configure pdfjs worker to run in browser
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface SyllabusItem {
  id: number;
  name?: string; 
  title?: string;
  category?: string;
  pdfUrl?: string;
}

interface AcademicSyllabusSchemaProps {
  departmentName: string;
}

const AcademicSyllabusSchema: React.FC<AcademicSyllabusSchemaProps> = ({ departmentName }) => {
  const [items, setItems] = useState<SyllabusItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSyllabus = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/academic-syllabus?department=${encodeURIComponent(departmentName)}&limit=100`
        );
        if (!res.ok) throw new Error("Failed to fetch academic syllabus");
        const data = await res.json();
        setItems(data.data || []);
      } catch (error) {
        console.error("Failed to fetch academic syllabus", error);
      } finally {
        setLoading(false);
      }
    };

    if (departmentName) fetchSyllabus();
  }, [departmentName]);

  // Group items by category
  const groupedEditions = useMemo(() => {
    const groups: Record<string, SyllabusItem[]> = {};
    items.forEach((item) => {
      const catName = item.category || "General Syllabus";
      if (!groups[catName]) groups[catName] = [];
      groups[catName].push(item);
    });
    return groups;
  }, [items]);

  if (loading) return <div className="py-10 text-center text-gray-500">Loading syllabus documents...</div>;
  if (items.length === 0) return <div className="py-10 text-center text-gray-500">No syllabus or schema documents found.</div>;

  return (
    <div className=" w-full pb-10">
      <h2 className="text-2xl text-center md:text-start  font-semibold text-[#1D1D1F] mb-4">Academic Syllabus & Schema</h2>
      
      {Object.entries(groupedEditions).map(([editionName, editionItems], idx) => (
        <div key={idx} className=" pb-6">
          {/* Static Heading (No Dropdown) */}
          <h3 className="text-[20px]  font-bold text-textGray mb-2">
            {editionName}
          </h3>

          {/* PDF Cards Grid */}
          <div className="flex flex-row flex-wrap gap-6 mt-2">
            {editionItems.map((item, i) => {
              const pdfUrl = item.pdfUrl ? `${process.env.NEXT_PUBLIC_API_URL}/academic-syllabus/file/${item.pdfUrl}` : "#";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col w-40"
                >
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform hover:scale-105"
                  >
                    <div className="w-40 h-48 overflow-hidden rounded shadow bg-gray-100 relative group">
                      <Document
                        file={pdfUrl !== "#" ? pdfUrl : null}
                        loading={
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 transition-colors animate-pulse">
                            <FileText className="w-8 h-8" />
                          </div>
                        }
                        error={
                          <div className="absolute inset-0 flex items-center justify-center bg-red-50 text-red-500 transition-colors">
                            <FileText className="w-8 h-8" />
                          </div>
                        }
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
                      
                      {/* Hover Overlay */}
                      {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View PDF</span>
                      </div> */}
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