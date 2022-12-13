import { ProductList } from "entities/product";
import { CancelAllSelectedModal, SearchByField } from "feature";

const ProductsPage = () => {
  return (
    <>
      <SearchByField />
      <ProductList />
      <CancelAllSelectedModal />
    </>
  );
};

export default ProductsPage;
