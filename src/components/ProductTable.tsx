import ProductCategoryRow from "./ProductCategoryRow";

type productShape = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type productList = {
  products: productShape[];
};

function ProductTable({ products }: productList) {
  const FRUITS = products.filter(
    (product: productShape) => product.category == "Fruits"
  );

  const VEGETABLES = products.filter(
    (product: productShape) => product.category == "Vegetables"
  );

  // TODO: Fix sending "product" as prop but accepting "products" as prop
  return (
    <>
      <ProductCategoryRow product={FRUITS} />
      <ProductCategoryRow product={VEGETABLES} />
    </>
  );
}

export default ProductTable;
