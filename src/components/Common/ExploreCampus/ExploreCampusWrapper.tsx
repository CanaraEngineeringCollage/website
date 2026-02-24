"use client";

import dynamic from "next/dynamic";

// Because this file has "use client", we are allowed to use ssr: false here.
const ExploreCampus = dynamic(() => import("./ExploreCampus"), { ssr: false });

interface ExploreCampusProps {
  title?: string;
  description?: string;
}

export default function ExploreCampusWrapper(props: ExploreCampusProps) {
  return <ExploreCampus {...props} />;
}