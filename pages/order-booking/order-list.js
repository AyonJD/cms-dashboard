import { Container, Paper } from "@mui/material";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";
import demoTwoSidebarConfig from "src/layouts/config/demoTowSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";

export default function OrderList() {
    const { themeStretch } = useSettings();
    return (
        <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
            <Page title="Kitchen | Order List">
                <Container maxWidth={themeStretch ? false : "xl"}>
                    <Paper sx={{ p: 0 }}>

                    </Paper>
                </Container>
            </Page>
        </DashboardLayout >
    )
}