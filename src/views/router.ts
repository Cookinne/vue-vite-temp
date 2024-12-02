import { createRouter, createWebHistory, NavigationGuard, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    component: () => import('~/views/layout/index.vue'),
    redirect: '/metrics',
    children: [
      {
        name: 'Metrics',
        path: '/metrics',
        component: () => import('~/views/pages/metrics/layout.vue'),
        children: [
          {
            name: 'MetricsCmp',
            path: 'metrics',
            component: () => import('~/views/pages/metrics/index.vue'),
          },
        ],
      },
      {
        name: 'Login',
        path: '/login',
        component: () => import('~/views/pages/login/layout.vue'),
        children: [
          {
            name: 'LoginCmp',
            path: 'login',
            component: () => import('~/views/pages/login/index.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export { routes };

const beforeEach: NavigationGuard = async (to, from, next) => {
  next();
};

export const routerInstance = createRouter({
  routes,
  history: createWebHistory(),
});
routerInstance.beforeEach(beforeEach);
