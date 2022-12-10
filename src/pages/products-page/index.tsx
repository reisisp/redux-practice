import { ProductCard, productModel } from "entities/product";

const ProductsPage = () => {
  const product = productModel.initialState.data[0].id;
  return <ProductCard data={product} />;
};

export default ProductsPage;
