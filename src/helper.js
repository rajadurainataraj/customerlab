export function filterData(filterText, allSchemaList) {
  const selectedFilter = allSchemaList?.filter((s) => {
    return s.toLowerCase().includes(filterText.toLowerCase());
  });

  return selectedFilter;
}
