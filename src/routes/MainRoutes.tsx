import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';

// types
import { SimpleLayoutType } from 'types/config';

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));
// render - sample page
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const Products = Loadable(lazy(() => import('pages/products')));
const Orders = Loadable(lazy(() => import('pages/orders')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'products',
          element: <Products />
        },
        {
          path: 'orders/dashboard',
          element: <Orders />
        }
      ]
    },
  ]
};

export default MainRoutes;
