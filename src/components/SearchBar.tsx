function SearchBar() {
  return (
    <>
      <div className="mt-2">
        <form className="form-control">
          <label htmlFor="search">
            <input
              id="search"
              placeholder="Search..."
              className="form-control"
            />
          </label>
          <br />
          <label htmlFor="stock">
            <input id="stock" type="checkbox" /> Only show producs in stock
          </label>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
