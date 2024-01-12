import { useState } from "react";

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
  const [searchText, setSearchText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        searchText={searchText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}

export default FilterableProductTable;
