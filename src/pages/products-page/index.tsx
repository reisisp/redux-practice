import { ui } from "shared";
import { ProductList } from "entities/product";
import { CancelAllSelectedModal, SearchByField } from "feature";

const { CenteredContainer } = ui;

const ProductsPage = () => {
  return (
    <CenteredContainer>
      <SearchByField />
      <ProductList />
      <CancelAllSelectedModal />
    </CenteredContainer>
  );
};

export default ProductsPage;
