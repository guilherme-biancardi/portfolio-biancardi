import { createRoute } from '@/ts/util';
const routerView = 'app';

const aboutMeRoute = createRoute('sobre-mim', 'aboutMe');
aboutMeRoute.setComponent(import('@/views/app/AboutMeView.vue'), routerView);

const projectsRoute = createRoute('projetos', 'project');
projectsRoute.setComponent(import('@/views/app/ProjectView.vue'), routerView);

export { aboutMeRoute, projectsRoute };
