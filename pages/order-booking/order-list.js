import { Container, Paper } from "@mui/material";
import Page from "src/components/Page";
import SortingSelecting from "src/components/_external-pages/table/sorting";
import { MotionInView, varFadeInDown } from "src/components/animate";
import CustomCard from "src/components/card/CustomCard";
import useSettings from "src/hooks/useSettings";
import demoTwoSidebarConfig from "src/layouts/config/demoTowSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";

export default function OrderList() {
    const { themeStretch } = useSettings();
    return (
        <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
            <Page title="CMS | Order List">
                <Container maxWidth={themeStretch ? false : "xl"}>
                    <Paper sx={{ p: 0 }}>
                        <CustomCard sx={{ width: 'auto', overflowX: 'auto' }}>
                            <MotionInView variants={varFadeInDown}>
                                <SortingSelecting />
                            </MotionInView>
                        </CustomCard>
                    </Paper>
                </Container>
            </Page>
        </DashboardLayout >
    )
}