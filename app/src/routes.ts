import type { RouteObject } from 'react-router-dom';
import { HomeRoute } from './views/home';
import { AboutRoute } from './views/about';

export const Routes: RouteObject[] = [
  HomeRoute,
  AboutRoute,
]