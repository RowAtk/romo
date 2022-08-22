import { AuthPage } from "pages/auth/AuthPage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "utlis/constants";

export interface AppRoutesProps {}

export function AppRoutes(/* props: AppRoutesProps */) {
  return (
    <Routes>
      <Route path={routes.auth} element={<AuthPage />} />
    </Routes>
  );
}
