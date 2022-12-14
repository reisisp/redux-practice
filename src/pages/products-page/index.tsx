import { useEffect } from "react";
import { ui } from "shared";
import { fetchData, ProductList } from "entities/product";
import { CancelAllSelectedModal, SearchByField } from "feature";
import { useAppDispatch, useAppSelector } from "shared/api/hook";
import { Spinner } from "shared/ui";

const { CenteredContainer } = ui;

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { isErr, loading, errMsg } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchData("/documents1"));
    dispatch(fetchData("/documents2"));
  }, [dispatch, isErr]);
  return (
    <>
      {loading && <Spinner />}
      {isErr && <h2>{errMsg}</h2>}
      {!loading && !isErr && (
        <CenteredContainer>
          <SearchByField />
          <ProductList />
          <CancelAllSelectedModal />
        </CenteredContainer>
      )}
    </>
  );
};

export default ProductsPage;
