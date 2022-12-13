import { ui } from "shared";
import { PageDoesNotExist } from "entities/page-does-not-exist";

const { CenteredContainer } = ui;

const NotFoundPage = () => {
  return (
    <CenteredContainer>
      <PageDoesNotExist />
    </CenteredContainer>
  );
};

export default NotFoundPage;
