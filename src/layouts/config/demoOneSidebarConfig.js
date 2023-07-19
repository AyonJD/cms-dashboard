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

const demoOneSidebarConfig = [
  {
    title: 'Patient Service Form',
    path: '/order-placement/patient-service-form',
    icon: ICONS.dashboard,
  },
  {
    title: 'Order Breakdown',
    path: '/order-placement/order-breakdown',
    icon: ICONS.ecommerce,
  },
  {
    title: 'Analytics',
    path: '/order-placement/analytics',
    icon: ICONS.analytics,
  },
]
export default demoOneSidebarConfig
