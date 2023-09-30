import { createRoute } from '@/ts/util';
const routerView = 'app';

const welcomeRoute = createRoute('welcome', 'welcome');
welcomeRoute.setComponent(import('../../views/app/WelcomeView.vue'), routerView);

export { welcomeRoute };
