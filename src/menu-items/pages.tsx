// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DollarOutlined, LoginOutlined, PhoneOutlined, RocketOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { DollarOutlined, LoginOutlined, PhoneOutlined, RocketOutlined };

// ==============================|| MENU ITEMS - PAGES ||============================== //

  const pages: NavItemType = {
    id: 'group-pages',
    // title: <FormattedMessage id="pages" />,
  type: 'group',
  children: [
    {
      id: 'products',
      title: <FormattedMessage id="products" />,
      type: 'item',
      url: '/products',
      // icon: icons.PhoneOutlined,
    },
    {
      id: 'orders',
      title: <FormattedMessage id="Orders" />,
      type: 'collapse',
      icon: icons.PhoneOutlined,
      children: [
        {
          id: 'orders-dashboard',
          title: "Dashboard",
          type: 'item',
          url: '/orders/dashboard'
        }
      ]
    },
    {
      id: 'performance',
      title: <FormattedMessage id="performance" />,
      type: 'item',
      url: '/performance',
    },
    {
      id: 'reports',
      title: <FormattedMessage id="reports" />,
      type: 'collapse',
      icon: icons.DollarOutlined,
      children: [
        {
          id: 'reports-dashboard',
          title: "Dashboard",
          type: 'item',
          url: '/reports/dashboard'
        }
      ]
    },
    {
      id: 'alerts',
      title: <FormattedMessage id="alerts" />,
      type: 'item',
      url: '/alerts',
    },
    {
      id: 'brand-analytics',
      title: <FormattedMessage id="brand-analytics" />,
      type: 'item',
      url: '/brand-analytics',
    },
    {
      id: 'settings',
      title: <FormattedMessage id="settings" />,
      type: 'item',
      url: '/settings',
    }
  ]
};

export default pages;
