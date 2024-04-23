import { useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import { useAuthentication } from "src/service/service-auth";
import { Suspense } from "react";
import SignInPage from "src/app/main/sign-in/SignInPage";
import Example from "src/app/main/example/Example";
import FuseLayout from "@fuse/core/FuseLayout";
import themeLayouts from "app/theme-layouts/themeLayouts";
import SignUpPage from "src/app/main/sign-up/SignUpPage";

const openRoutes = [
  {
    path: NAVIGATION_ROUTES.LOGIN,
    element: <SignInPage />,
  },
  {
    path: NAVIGATION_ROUTES.NO_MATCH,
    element: <SignInPage />,
  },
  {
    path: NAVIGATION_ROUTES.REGISTER,
    element: <SignUpPage />,
  },
];
const routes = [
  {
    path: NAVIGATION_ROUTES.DASHBOARD,
    element: <Example />,
  },
  {
    path: NAVIGATION_ROUTES.NO_MATCH,
    element: <Example />,
  },
];

const AppRoutes = () => {
  const { data: isAuthenticated, isLoading } = useAuthentication();

  const element = useRoutes(isAuthenticated ? routes : openRoutes);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return <Suspense fallback={<p>aaaaaaa</p>}>{element}</Suspense>;
};

export default AppRoutes;
