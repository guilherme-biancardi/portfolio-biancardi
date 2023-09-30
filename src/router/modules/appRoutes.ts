import { createRoute } from '@/ts/util';
const routerView = 'app';

const welcomeRoute = createRoute('bem-vindo', 'welcome');
welcomeRoute.setComponent(import('@/views/app/WelcomeView.vue'), routerView);

const aboutMeRoute = createRoute('sobre-mim', 'aboutMe');
aboutMeRoute.setComponent(import('@/views/app/AboutMeView.vue'), routerView);

const projectsRoute = createRoute('projetos', 'project');
projectsRoute.setComponent(import('@/views/app/ProjectView.vue'), routerView);

const newtworksRoute = createRoute('minhas-redes', 'network');
newtworksRoute.setComponent(import('@/views/app/NetworkView.vue'), routerView);

export { welcomeRoute, aboutMeRoute, projectsRoute, newtworksRoute };
