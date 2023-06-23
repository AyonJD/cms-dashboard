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

const demoThreeSidebarConfig =
    [
        {
            title: "Select Product",
            path: '/order-delivery/select-product', // order from
            icon: ICONS.dashboard,
        },
        {
            title: "Invoice",
            path: '/order-delivery/invoice',
            icon: ICONS.ecommerce,
        },
        {
            title: "Delivery Log",
            path: '/order-delivery/delivery-log',
            icon: ICONS.analytics,
        },
    ]
export default demoThreeSidebarConfig;
