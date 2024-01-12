import ProductCategoryRow from "./ProductCategoryRow";

type productShape = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type productList = {
  products: productShape[];
  searchText: string;
  inStockOnly: boolean;
};

function ProductTable({ products, searchText, inStockOnly }: productList) {
  const FRUITS = products.filter(
    (product: productShape) =>
      product.category == "Fruits" && product.name.includes(searchText)
  );

  const VEGETABLES = products.filter(
    (product: productShape) =>
      product.category == "Vegetables" && product.name.includes(searchText)
  );

  // TODO: Fix sending "product" as prop but accepting "products" as prop
  return (
    <>
      <ProductCategoryRow
        product={inStockOnly ? FRUITS.filter((fruit) => fruit.stocked) : FRUITS}
      />
      <ProductCategoryRow
        product={
          inStockOnly
            ? VEGETABLES.filter((vegetable) => vegetable.stocked)
            : VEGETABLES
        }
      />
    </>
  );
}

export default ProductTable;
