import type { CreateRouteMap, CreateRouteFactory } from './types';
import type { RouteRecordMultipleViews } from 'vue-router';

const createRoute = (path: string, name: string): CreateRouteFactory => {
  const route: CreateRouteMap = new Map();

  route.set('path', path);
  route.set('name', name);

  return {
    redirect(name) {
      route.set('redirect', { name });
    },
    setComponent(component, routerView) {
      route.set('components', {
        [routerView]: () => component
      });
    },
    setChildren(children) {
      route.set('children', children as unknown as string[]);
    },
    get: () => Object.fromEntries(route) as unknown as RouteRecordMultipleViews
  };
};

export { createRoute };
