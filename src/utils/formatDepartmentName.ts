const formatDepartmentName = (text: string) => {
  if (!text) return "";
  return text.replace(/&/g, "and");
};

export default formatDepartmentName;
