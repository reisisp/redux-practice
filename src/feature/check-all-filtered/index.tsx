import { Checkbox } from "antd";
import {
  isFilteredProductsChecked,
  setAllFilteredChecked,
  setAllFilteredUnChecked,
  useFiltredProducts,
} from "entities/product";
import { useDispatch } from "react-redux";

export const CheckAllFiltered = () => {
  const dispatch = useDispatch();
  const filteredProducts = useFiltredProducts();
  const checked = isFilteredProductsChecked();

  const toggleCheckAll = () => {
    const idArr: string[] = filteredProducts.map((el) => el.id);
    !checked ? dispatch(setAllFilteredChecked(idArr)) : dispatch(setAllFilteredUnChecked(idArr));
  };
  return <Checkbox checked={checked} onChange={toggleCheckAll} />;
};
