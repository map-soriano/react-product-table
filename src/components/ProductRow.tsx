type Product = {
  name: string;
  price: string;
  stocked: boolean;
};

function ProductRow({ name, price, stocked }: Product) {
  return stocked ? (
    <tr className="table-success">
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  ) : (
    <tr className="table-danger">
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
