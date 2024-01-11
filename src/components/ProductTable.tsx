import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

// TODO: Change ANY here to expect a dictionary
function ProductTable({ products }: any) {
  return (
    <>
      <h5>Name Price</h5>
      <ProductCategoryRow product={products} />
      <ProductRow product={products} />
    </>
  );
}

export default ProductTable;
