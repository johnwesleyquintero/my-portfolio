export const validateCSV = (headers: string[]) => {
  const requiredFields = [
    "Keyword",
    "Impressions",
    "Clicks",
    "Spend",
    "Sales",
  ];
  return requiredFields.every((field) => headers.includes(field));
};
