import ProductRow from "./ProductRow";

// TODO: Change ANY here to expect a dictionary
function ProductCategoryRow(products: any) {
  return (
    <>
      <table className="table table-striped table-bordered">
        <caption className="caption-top"></caption>
        <thead>
          <tr>
            <td colSpan={2} className="text-center">
              <strong>{products.product[0].category}</strong>
            </td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.product.map((product: any) => (
            <ProductRow
              key={product.name}
              name={product.name}
              price={product.price}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductCategoryRow;
