import { createRoute } from '@/ts/util';
import type { RouteRecordRaw } from 'vue-router';
import { welcomeRoute } from './modules/appRoutes';

const rootRoute = createRoute('/', 'root');
rootRoute.redirect('app');

const appRoute = createRoute('/app', 'app');
appRoute.redirect('welcome');
appRoute.setChildren([welcomeRoute.get()]);

export const useRoutes = (): RouteRecordRaw[] => [rootRoute.get(), appRoute.get()];
