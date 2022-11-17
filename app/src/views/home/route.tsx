import type { RouteObject } from 'react-router-dom';
import Error from '../error/Error';
import Home from './Home';

export const HomeRoute: RouteObject = {
  path: "/",
  element: <Home />,
  errorElement: <Error />,
}