import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

type productShape = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type productList = {
  products: productShape[];
};

function FilterableProductTable({ products }: productList) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
    </>
  );
}

export default FilterableProductTable;
