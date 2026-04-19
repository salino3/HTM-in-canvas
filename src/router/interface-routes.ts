import React, { lazy } from "react";

interface Routes {
  root: string;
  form3d: string;
  error404: string;
}

export const routesApp: Routes = {
  root: "/",
  form3d: "/form3d",
  error404: "*",
};

// Function Routes lazyLoad()
const lazyLoad = (importFactory: () => Promise<any>, exportName: string) =>
  React.lazy(() =>
    importFactory().then((module) => ({ default: module[exportName] })),
  );

// Lazy Page Components
export const LazyHomePage: React.LazyExoticComponent<React.FC<{}>> = lazy(
  () => import("../components/home/home-page"),
); // with 'export default'

export const Lazyform3dPage: React.LazyExoticComponent<React.FC<{}>> = lazyLoad(
  () => import("../components/room/room.component"), // ImportPromise
  "Room", // ExportName
);
