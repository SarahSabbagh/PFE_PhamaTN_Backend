import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { SignIn } from "../pages/Login";
import { Register } from "../pages/Register";
import { ErrorPage } from "../pages/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <SignIn /> },
  { path: "/register", element: <Register /> },
]);
