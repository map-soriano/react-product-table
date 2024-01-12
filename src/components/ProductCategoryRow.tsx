import ProductRow from "./ProductRow";

type productShape = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type productList = {
  products: productShape[];
};

function ProductCategoryRow(products: productList) {
  // TODO: Fix ESLint errors
  return (
    <>
      <table className="table table-sm table-bordered">
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
          {products.product.map((product: productList) => (
            <ProductRow
              key={product.name}
              name={product.name}
              price={product.price}
              stocked={product.stocked}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductCategoryRow;
