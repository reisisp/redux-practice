import { Route, Routes, Navigate } from "react-router";
import { lazy } from "react";

const ProductsPage = lazy(() => import("./products-page"));
const NotFoundPage = lazy(() => import("./not-found-page"));

const routes = [
  { path: "/", element: <ProductsPage /> },
  { path: "/not-found", element: <NotFoundPage /> },
  { path: "*", element: <Navigate to="/not-found" /> },
];

export const Routing = () => {
  return (
    <Routes>
      {routes.map((el) => (
        <Route key={el.path} path={el.path} element={el.element} />
      ))}
    </Routes>
  );
};
