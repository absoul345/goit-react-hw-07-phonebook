import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/goit-react-hw-07-phonebook',
    component: lazy(
      () => import('../pages/home/HomePage') /* webpackChunkName: "HomePage" */,
    ),
    exact: true,
    restricted: false,
    isPrivate: false,
    redirectTo: '/login',
  },
  {
    name: 'Register',
    path: '/registration',
    component: lazy(
      () =>
        import(
          '../pages/registration/Registration'
        ) /* webpackChunkName: "Registration" */,
    ),
    exact: true,
    restricted: true,
    redirectTo: '/contacts',
    isPrivate: false,
  },
  {
    name: 'Login',
    path: '/login',
    component: lazy(
      () => import('../pages/login/Login') /* webpackChunkName: "LoginPage" */,
    ),
    exact: true,
    restricted: true,
    redirectTo: '/contacts',
    isPrivate: false,
  },
  {
    name: 'Phonebook',
    path: '/contacts',
    component: lazy(
      () =>
        import(
          '../pages/phonebook/Phonebook'
        ) /* webpackChunkName: "Phonebook" */,
    ),
    exact: true,
    restricted: true,
    redirectTo: '/login',
    isPrivate: true,
  },
];
