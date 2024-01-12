import ProductCategoryRow from "./ProductCategoryRow";

type ProductTablePropShape = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type ProductTableProps = {
  products: ProductTablePropShape[];
  searchText: string;
  inStockOnly: boolean;
};

function ProductTable({
  products,
  searchText,
  inStockOnly,
}: ProductTableProps) {
  const FRUITS = products.filter(
    (product: ProductTablePropShape) =>
      product.category == "Fruits" &&
      product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const VEGETABLES = products.filter(
    (product: ProductTablePropShape) =>
      product.category == "Vegetables" &&
      product.name.toLowerCase().includes(searchText.toLowerCase())
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
