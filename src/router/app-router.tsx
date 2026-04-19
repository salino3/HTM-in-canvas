import React, { type JSX } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ContainerLayout } from "../layouts";
import {
  Lazyform3dPage,
  LazyHomePage,
  LazySignupFormdPage,
  routesApp,
} from "./interface-routes";

interface PropsRoutes {
  path: string;
  element: JSX.Element;
}

const routes: PropsRoutes[] = [
  {
    path: routesApp?.root,
    element: <LazyHomePage />,
  },
  {
    path: routesApp?.form3d,
    element: <Lazyform3dPage />,
  },
  {
    path: routesApp?.signupForm,
    element: <LazySignupFormdPage />,
  },
];

// Layout wrapper component
const LayoutWrapper: React.FC = () => (
  <ContainerLayout>
    <Outlet />
  </ContainerLayout>
);

const reducedRoutes: JSX.Element[] = routes.reduce((acc, route) => {
  acc.push(
    <Route key={route.path} path={route.path} element={route.element} />,
  );
  return acc;
}, [] as JSX.Element[]);

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* <Suspense fallback={...}> ... */}
      <Route element={<LayoutWrapper />}>
        {reducedRoutes}

        <Route
          path={routesApp?.error404}
          element={<Navigate to={routesApp.root} />}
        />
      </Route>
    </Routes>
  );
};
