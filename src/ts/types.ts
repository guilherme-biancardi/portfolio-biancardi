import type { RouteRecordMultipleViews } from 'vue-router';
import type { Component } from 'vue';

interface UtilFactory<T> {
  get: () => T;
}

type RouteKeys = keyof RouteRecordMultipleViews;
export type CreateRouteMap = Map<RouteKeys, RouteRecordMultipleViews[RouteKeys]>;

export interface CreateRouteFactory extends UtilFactory<RouteRecordMultipleViews> {
  redirect: (name: string) => void;
  setComponent: (component: Promise<Component>, routerView: string) => void;
  setChildren: (children: RouteRecordMultipleViews[]) => void
}
