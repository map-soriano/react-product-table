import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ products }: any) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
}

export default FilterableProductTable;
