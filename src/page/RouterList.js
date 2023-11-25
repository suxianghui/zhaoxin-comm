import { lazy } from "react";

export const RouterList = [
  { component: lazy(() => import('./home')), pathname: '/home/' , children: true },
 
];
