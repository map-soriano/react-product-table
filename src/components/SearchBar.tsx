type SearchBarProps = {
  searchText: string;
  inStockOnly: boolean;
  onSearchTextChange: (e: string) => void;
  onInStockOnlyChange: (e: boolean) => void;
};

function SearchBar({
  searchText,
  inStockOnly,
  onSearchTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
  // TODO: Improve search bar styling
  return (
    <>
      <div className="mt-2">
        <form className="form-control shadow-sm p-2">
          <label htmlFor="search">
            <input
              id="search"
              placeholder="Search..."
              value={searchText}
              className="form-control interactive"
              onChange={(e) => onSearchTextChange(e.target.value)}
            />
          </label>
          <label htmlFor="stock">
            <input
              id="stock"
              type="checkbox"
              className="form-check-input ms-3"
              checked={inStockOnly}
              onChange={(e) => onInStockOnlyChange(e.target.checked)}
            />{" "}
            Only show products in stock
          </label>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
