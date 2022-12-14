import { ui } from "shared";
import { useCheckedItems, getCheckedProductsName, cancelChoosed } from "entities/product";
import { useAppDispatch } from "shared/api/hook";

const { ApplyModal } = ui;

export const CancelAllSelectedModal = () => {
  const dispatch = useAppDispatch();
  const checked = useCheckedItems();
  const productNames = getCheckedProductsName();

  const prepareTitleMsg = "Вы уверены что хотите аннулировать товар(ы)?";
  const prepareBodyMsg = `Товары: ${productNames.join(", ")}.`;
  const isActive = !checked.length;

  const onConfirm = () => {
    dispatch(cancelChoosed(checked));
  };

  return (
    <ApplyModal msgTitle={prepareTitleMsg} isActive={isActive} msgBody={prepareBodyMsg} confirm={onConfirm}>
      Аннулировать
    </ApplyModal>
  );
};
