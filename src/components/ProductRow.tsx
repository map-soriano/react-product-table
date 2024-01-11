// TODO: Change ANY here to expect a dictionary
function ProductRow({ product }: any) {
  return (
    <p>
      {product.name} {product.price}
    </p>
  );
}

export default ProductRow;
