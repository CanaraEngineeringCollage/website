import { useMemo } from "react";

const useAndFormatter = (text) => {
  const formattedText = useMemo(() => {
    if (!text) return "";
    return text.replace(/&/g, "and");
  }, [text]);

  return formattedText;
};

export default useAndFormatter;
