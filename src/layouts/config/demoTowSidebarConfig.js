// components
import SvgIconStyle from '../../components/SvgIconStyle'

// ----------------------------------------------------------------------

const getIcon = name => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: '100%', height: '100%' }}
  />
)

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
}

const demoTwoSidebarConfig = [
  {
    title: 'Book Service',
    path: '/order-booking/book-service',
    icon: ICONS.dashboard,
  },
  {
    title: 'Schedule Service Hour',
    path: '/order-booking/schedule',
    icon: ICONS.ecommerce,
  },
  {
    title: 'User View',
    path: '/order-booking/order-list',
    icon: ICONS.analytics,
  },
  {
    title: 'Analytics',
    path: '/order-booking/analytics',
    icon: ICONS.analytics,
  },
]
export default demoTwoSidebarConfig
