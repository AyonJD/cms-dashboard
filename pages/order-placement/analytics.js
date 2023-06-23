import { Container, Paper, Typography } from "@mui/material";
import Page from "src/components/Page";
import BasicTable from "src/components/_external-pages/table/BasicTable";
import { MotionInView, varFadeInDown } from "src/components/animate";
import CustomCard from "src/components/card/CustomCard";
import ChartLine from "src/components/chart/ChartLine";
import useSettings from "src/hooks/useSettings";
import demoOneSidebarConfig from "src/layouts/config/demoOneSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";

export default function Analytics() {
    const { themeStretch } = useSettings();

    return (
        <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
            <Page title="Kitchen | Analytics">
                <Container maxWidth={themeStretch ? false : "xl"}>
                    <Paper sx={{ p: 0 }}>
                        <CustomCard>
                            <MotionInView variants={varFadeInDown}>
                                <Typography variant="h5" sx={{ textAlign: 'center' }}>Todays Order</Typography>
                                <BasicTable />
                            </MotionInView>
                        </CustomCard>

                        <MotionInView variants={varFadeInDown}>
                            <CustomCard sx={{ marginTop: 4 }}>
                                <Typography variant="h5" sx={{ textAlign: 'center' }}>Peek Hours</Typography>
                                <ChartLine />
                            </CustomCard>
                        </MotionInView>
                    </Paper>
                </Container>
            </Page>
        </DashboardLayout >
    )
}