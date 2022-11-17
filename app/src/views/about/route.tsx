import type { RouteObject } from 'react-router-dom';
import About from './About';

export const AboutRoute: RouteObject = {
  path: "/about",
  element: <About />,
}