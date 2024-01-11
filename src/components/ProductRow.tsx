function ProductRow({ name, price }: { name: string; price: string }) {
  return (
    <p>
      {name} {price}
    </p>
  );
}

export default ProductRow;
