// components
import SvgIconStyle from "../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name) => (
    <SvgIconStyle
        src={`/static/icons/navbar/${name}.svg`}
        sx={{ width: "100%", height: "100%" }}
    />
);

const ICONS = {
    user: getIcon("ic_user"),
    ecommerce: getIcon("ic_ecommerce"),
    analytics: getIcon("ic_analytics"),
    dashboard: getIcon("ic_dashboard"),
};

const demoTwoSidebarConfig =
    [
        {
            title: "Select Product",
            path: '/order-booking/select-product', // order from
            icon: ICONS.dashboard,
        },
        {
            title: "Schedule",
            path: '/order-booking/schedule',
            icon: ICONS.ecommerce,
        },
        {
            title: "Order List",
            path: '/order-booking/order-list',
            icon: ICONS.analytics,
        },
    ]
export default demoTwoSidebarConfig;
