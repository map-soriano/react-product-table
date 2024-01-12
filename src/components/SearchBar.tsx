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
  return (
    <>
      <div className="mt-2">
        <form className="form-control">
          <label htmlFor="search">
            <input
              id="search"
              placeholder="Search..."
              value={searchText}
              className="form-control interactive"
              onChange={(e) => onSearchTextChange(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="stock">
            <input
              id="stock"
              type="checkbox"
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
