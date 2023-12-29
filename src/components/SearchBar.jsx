const SearchBar = ({
  title,
  filterText,
  setFilterText,
  filterData,
  allSchemaList,
  setSchemaList,
}) => {
  return (
    <form>
      <label htmlFor="segment">{title}</label>
      <input
        type="text"
        placeholder="Name of the segment"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value)
          setSchemaList(filterData(e.target.value, allSchemaList))
        }}
      />
    </form>
  )
}

export default SearchBar
