function ProductRow({ name, price }: { name: string; price: string }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
