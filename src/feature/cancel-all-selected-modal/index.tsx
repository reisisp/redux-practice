import { ui } from "shared";
import { useCheckedItems, getCheckedProductsName } from "entities/product";

const { ApplyModal } = ui;

export const CancelAllSelectedModal = () => {
  const checked = useCheckedItems();
  const productNames = getCheckedProductsName();

  const prepareTitleMsg = "Вы уверены что хотите аннулировать товар(ы)?";
  const prepareBodyMsg = `Товары: ${productNames.join(", ")}.`;
  const isActive = !checked.length;

  const onConfirm = () => {
    console.log(checked);
  };

  return (
    <ApplyModal msgTitle={prepareTitleMsg} isActive={isActive} msgBody={prepareBodyMsg} confirm={onConfirm}>
      Аннулировать
    </ApplyModal>
  );
};
