import { getRequest } from './api';

export const initMenus = (router, store) => {
  if (store.state.routes.length > 0) {
    return;
  }
  getRequest('/system/config/menu').then(data => {
    if (data) {
      let fmtRoutes = formatRoutes(data);
      router.addRoutes(fmtRoutes);
      store.commit('initRoutes', fmtRoutes);
    }
  });
};

export const formatRoutes = routes => {
  let fmtRoutes = [];
  routes.forEach(route => {
    let { path, component, name, meta, iconCls, children } = route;
    if (children && children instanceof Array) {
      children = formatRoutes(children);
    }
    let fmtRoute = {
      path: path,
      name: name,
      iconCls: iconCls,
      meta: meta,
      children: children,
      /*component(resolve) {
        if (component.startsWith('Home')) {
          require(['../views/Home.vue'], resolve);
        } else if (component.startsWith('Sys')) {
          require(['../views/sys/' + component + '.vue'], resolve);
        }
      }*/
      component() {
        if (component.startsWith('Home')) {
          require.resolve('../views/Home.vue');
        } else if (component.startsWith('Sys')) {
          require.resolve('../views/sys/' + component + '.vue');
        }
      }
    };
    fmtRoutes.push(fmtRoute);
  });
  return fmtRoutes;
};
