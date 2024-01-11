// TODO: Change ANY here to expect a dictionary
function ProductRow({ name, price }: any) {
  return (
    <p>
      {name} {price}
    </p>
  );
}

export default ProductRow;
