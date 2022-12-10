import { Route, Routes, Navigate } from "react-router";
import { lazy } from "react";

const ProductsPage = lazy(() => import("./products-page"));
const NotFoundPage = lazy(() => import("./not-found-page"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};
