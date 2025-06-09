import { CocktailsPage } from "@pages/CocktailsPage";
import { Page404 } from "@pages/Page404";
import { data } from "@shared/constants/common";
import type { FC, FunctionComponent, ReactNode } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const routes: Array<{ path: string; Component: FunctionComponent }> = [
  {
    path: "/:code",
    Component: CocktailsPage,
  },
  {
    path: "*",
    Component: Page404,
  },
];

function buildRoutes(): Array<{ path: string; element: ReactNode }> {
  const result = routes.map(({ path, Component }) => {
    return {
      path,
      element: <Component />,
    };
  });

  result.push({
    path: "/",
    element: <Navigate to={`/${data[0].value}`} />,
  });

  return result;
}

const router = createBrowserRouter(buildRoutes());

export const Router: FC = () => {
  return <RouterProvider router={router} />;
};
