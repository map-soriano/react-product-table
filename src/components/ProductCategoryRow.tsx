import ProductRow from "./ProductRow";

// TODO: Change ANY here to expect a dictionary
function ProductCategoryRow(products: any) {
  return (
    <>
      {/* TODO: Make CATEGORY h6 to be dynamic*/}
      <h6>CATEGORY</h6>
      {products.product.map((product: any) => (
        <ProductRow
          key={product.name}
          name={product.name}
          price={product.price}
        />
      ))}
    </>
  );
}

export default ProductCategoryRow;
