function SearchBar() {
  return (
    <>
      <label htmlFor="search">
        <input id="search" placeholder="Search..." />
      </label>
      <br />
      <label htmlFor="stock">
        <input id="stock" type="checkbox" />
        Only show producs in stock
      </label>
    </>
  );
}

export default SearchBar;
