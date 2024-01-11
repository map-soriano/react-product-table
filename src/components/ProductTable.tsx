import ProductCategoryRow from "./ProductCategoryRow";

// TODO: Change ANY here to expect a dictionary
function ProductTable({ products }: any) {
  const FRUITS = products.filter(
    (product: any) => product.category == "Fruits"
  );

  const VEGETABLES = products.filter(
    (product: any) => product.category == "Vegetables"
  );

  return (
    <>
      <h5>Name Price</h5>
      <ProductCategoryRow product={FRUITS} />
      <ProductCategoryRow product={VEGETABLES} />
    </>
  );
}

export default ProductTable;
