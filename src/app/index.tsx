import { Routing } from "pages";
import React from "react";

import { withProviders } from "./providers";

import "./index.scss";

const App = () => {
  return <Routing />;
};

export default withProviders(App);
