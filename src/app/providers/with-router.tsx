import { Suspense, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ui } from "shared";

const { Spinner } = ui;

export const withRouter = (component: () => ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
    </BrowserRouter>
  );
