import ProductRow from "./ProductRow";

type ProductCategoryRowPropShape = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type ProductCategoryRowProps = {
  products: ProductCategoryRowPropShape[];
};

function ProductCategoryRow(products: ProductCategoryRowProps) {
  // TODO: Fix ESLint errors
  let category: string;

  try {
    category = products.product[0].category;
  } catch (error) {
    return;
  }

  return (
    <>
      <table className="table table-sm table-bordered border border-2 border-black non-interactive">
        <thead>
          <tr>
            <td colSpan={2} className="text-center">
              <strong>{category}</strong>
            </td>
          </tr>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.product.map((product: ProductCategoryRowProps) => (
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
