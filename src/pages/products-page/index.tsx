import { ProductList } from "entities/product";
import { SearchByField } from "feature";

const ProductsPage = () => {
  return (
    <>
      <SearchByField />
      <ProductList />
    </>
  );
};

export default ProductsPage;
