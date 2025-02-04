import React, { lazy } from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import Result from "./pages/Result";
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Payment = lazy(() => import("./pages/Payment"));
const PayNow = lazy(() => import("./pages/PayNow"));

export const dashboardRoutes = [
  {
    path: "",
    pathname: "",
    name: "Dashboard",
    element: <Dashboard />,
    icon: <DashboardIcon />,
  },
  {
    path: "home",
    pathname: "/home",
    name: "Payment",
    element: <Payment />,
    icon: <PaymentIcon />,
  },
  {
    path: "Results",
    pathname: "/profile",
    name: "Results",
    element: <Result />,
    icon: <DashboardIcon />,
  },
  // { path: "/dashboard", name: "Dashboard", element: Dashboard, icon: DashboardIcon },
];

const Routes = () =>
  useRoutes([
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: dashboardRoutes,
    },
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "/", element: <Navigate to="/dashboard" replace /> },
        { path: "auth", element: <Auth /> },
        { path: "/payment", element: <PayNow /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);

export default Routes;
