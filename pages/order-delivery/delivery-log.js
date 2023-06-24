import { Container, Paper } from "@mui/material";
import Page from "src/components/Page";
import SortingSelecting from "src/components/_external-pages/table/sorting";
import { MotionInView, varFadeInDown } from "src/components/animate";
import CustomCard from "src/components/card/CustomCard";
import useSettings from "src/hooks/useSettings";
import demoThreeSidebarConfig from "src/layouts/config/demoThreeSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";

function createData(orderId, customer, orderItem, totalPrice) {
    return { orderId, customer, orderItem, totalPrice };
}

const SORTING_SELECTING_TABLE = [
    createData('1234', 'John Doe', 'Dhaka', new Date().toLocaleDateString()),
    createData('8754', 'Alex', 'Khulna', new Date().toLocaleDateString()),
    createData('5792', 'Selena', 'Dhaka', new Date().toLocaleDateString()),
    createData('8473', 'Alex', 'Dhaka', new Date().toLocaleDateString()),
    createData('9724', 'Sakib', 'Dhaka', new Date().toLocaleDateString()),
    createData('5784', 'Kashem', 'Dhaka', new Date().toLocaleDateString()),
    createData('7846', 'Sakib', 'Dhaka', new Date().toLocaleDateString())
];

const TABLE_HEAD = [
    {
        id: 'orderId',
        numeric: false,
        disablePadding: true,
        label: 'Delivery Id'
    },
    {
        id: 'customer',
        numeric: true,
        disablePadding: false,
        label: 'Customer'
    },
    {
        id: 'orderItem',
        numeric: true,
        disablePadding: false,
        label: 'Address'
    },
    {
        id: 'totalPrice',
        numeric: true,
        disablePadding: false,
        label: 'Order Date'
    }
];

export default function DeliveryLog() {
    const { themeStretch } = useSettings();
    return (
        <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
            <Page title="CMS | Delivery Log">
                <Container maxWidth={themeStretch ? false : "xl"}>
                    <Paper sx={{ p: 0 }}>
                        <CustomCard sx={{ width: 'auto', overflowX: 'auto' }}>
                            <MotionInView variants={varFadeInDown}>
                                <SortingSelecting formHeader="Delivery Log" tableHead={TABLE_HEAD} tableData={SORTING_SELECTING_TABLE} />
                            </MotionInView>
                        </CustomCard>
                    </Paper>
                </Container>
            </Page>
        </DashboardLayout >
    )
}