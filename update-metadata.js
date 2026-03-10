const fs = require('fs');
const path = require('path');

const srcAppDir = 'c:\\\\megamind\\\\cec\\\\website\\\\src\\\\app';

const staticRoutes = [
  { url: "/", title: "Canara Engineering College" },
  { url: "/admission", title: "Admissions" },
  { url: "/academics/programs", title: "Programs" },
  { url: "/training-placements", title: "Training and Placements" },
  { url: "/department-overview", title: "Department Overview" },
  { url: "/campus-buzz", title: "Campus Buzz" },
  { url: "/careers", title: "Careers" },
  { url: "/about/about-cec", title: "About CEC" },
  { url: "/student-achievements", title: "Student Achievements" },
  { url: "/alumni", title: "Alumni" },
  { url: "/academics/academic-overview", title: "Academic Overview" },
  { url: "/cif", title: "CIF" },
  { url: "/entrepreneurship-cell", title: "Entrepreneurship Cell" },
  { url: "/explore/infrastructure", title: "Infrastructure" },
  { url: "/explore/hostel-life", title: "Hostel Life" },
  { url: "/studentlife-engagement", title: "Student Life & Engagement" },
  { url: "/research-development-consultancy", title: "Research & Development Consultancy" },
  { url: "/explore/central-library", title: "Central Library" },
  { url: "/explore/physical-education", title: "Physical Education" },
  { url: "/academics/research", title: "Research" },
  { url: "/academics/learning-hub", title: "Learning Hub" },
  { url: "/academics/examination-records", title: "Examination Records" },
  { url: "/about/mandatory-disclosure", title: "Mandatory Disclosure" },
  { url: "/about/distinctive-practices", title: "Distinctive Practices" },
  { url: "/about/educators-administrators", title: "Educators & Administrators" },
  { url: "/about/governing-council", title: "Governing Council" },
  { url: "/about/our-management", title: "Our Management" },
  { url: "/about/our-founder", title: "Our Founder" },
  { url: "/about/key-functionaries-and-hods", title: "Key Functionaries and HODs" },
  { url: "/about/student-welfare-department", title: "Student Welfare Department" },
  { url: "/explore/central-library/about-library", title: "About Library" },
  { url: "/alumni/about-alumni", title: "About Alumni" },
  { url: "/about/history-of-cec", title: "History of CEC" },
  { url: "/about/grievance-redressal-cell", title: "Grievance Redressal Cell" },
  { url: "/about/mandatory-disclosure/sc-st-grievance", title: "SC/ST Grievance" },
  { url: "/privacy-policy", title: "Privacy Policy" },
];

function updateMetadata(content, route) {
  const canonicalUrl = route.url;
  let newContent = content;

  if (newContent.includes('alternates:') && newContent.includes('canonical:')) {
    return newContent;
  }

  const metaString1 = "export const metadata: Metadata = {";
  const metaString2 = "export const metadata = {";

  const insertion = "\n  alternates: {\n    canonical: '" + canonicalUrl + "'\n  },";

  if (newContent.includes(metaString1)) {
    newContent = newContent.replace(metaString1, metaString1 + insertion);
  } else if (newContent.includes(metaString2)) {
    newContent = newContent.replace(metaString2, metaString2 + insertion);
  } else {
    // Some routes might import Metadata
    if (!newContent.includes("import { Metadata }") && !newContent.includes("import type { Metadata }")) {
      newContent = "import { Metadata } from 'next';\n" + newContent;
    }
    const metadataBlock = "\nexport const metadata: Metadata = {\n  title: \"" + route.title + " | Canara Engineering College\",\n  alternates: {\n    canonical: '" + canonicalUrl + "'\n  }\n};\n";
    const defaultExportRegex = /export\s+default\s+(async\s+)?function/;
    if (defaultExportRegex.test(newContent)) {
      newContent = newContent.replace(defaultExportRegex, metadataBlock + '\nexport default function');
    } else {
      newContent += '\n' + metadataBlock;
    }
  }

  return newContent;
}

let modifiedCount = 0;
let missingFiles = [];

for (const route of staticRoutes) {
  let relativePath = route.url === "/" ? "" : route.url.replace(/^\//, ''); // REMOVED LEADING SLASH!
  const pagePath = path.join('c:\\megamind\\cec\\website\\src\\app', relativePath, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    const updatedContent = updateMetadata(content, route);
    
    if (updatedContent !== content) {
      fs.writeFileSync(pagePath, updatedContent, 'utf8');
      modifiedCount++;
      console.log("Updated: " + pagePath);
    } else {
      console.log("Unchanged/Skipped: " + pagePath);
    }
  } else {
    missingFiles.push(pagePath);
    console.log("Missing file: " + pagePath);
  }
}

console.log("Finished processing. " + modifiedCount + " files updated.");
if (missingFiles.length > 0) {
  console.log("Missing files: " + missingFiles.join(", "));
}
