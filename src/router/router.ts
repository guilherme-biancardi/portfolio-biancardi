import { createRoute } from '@/ts/util';
import type { RouteRecordRaw } from 'vue-router';
import { projectsRoute, aboutMeRoute } from './modules/appRoutes';

const rootRoute = createRoute('/', 'root');
rootRoute.redirect('app');

const appRoute = createRoute('/app', 'app');
appRoute.redirect('aboutMe');
appRoute.setChildren([
  aboutMeRoute.get(),
  projectsRoute.get(),
]);

export const useRoutes = (): RouteRecordRaw[] => [rootRoute.get(), appRoute.get()];
