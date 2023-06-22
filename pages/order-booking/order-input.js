import { Box, Container, Typography, alpha, useTheme } from "@mui/material";
import Page from "src/components/Page";
import SwiperCardSlider from "src/components/Sider/SwiperCardSlider";
import SelectionForm from "src/components/_external-pages/selection-form";
import { MotionInView, varFadeInLeft, varFadeInRight, varFadeInUp } from "src/components/animate";
import CustomCard from "src/components/card/CustomCard";
import useSettings from "src/hooks/useSettings";
import demoTwoSidebarConfig from "src/layouts/config/demoTowSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";


export default function OrderInput() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    const sliderBackground = isLight ? '#1CCAFF' : '#1CCAFF';

    const cardData = [
        {
            title: 'Demo One',
            image: '/static/mock-images/demo-one-1.png',
        },
        {
            title: 'Demo Two',
            image: '/static/mock-images/demo-one-2.png',
        },
        {
            title: 'Demo Three',
            image: '/static/mock-images/demo-one-3.png',
        },
        {
            title: 'Demo Four',
            image: '/static/mock-images/demo-one-4.png',
        },
        {
            title: 'Demo Five',
            image: '/static/mock-images/demo-one-5.png',
        }
    ]

    return (
        <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
            <Page title="Kitchen | Order Input">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <MotionInView variants={varFadeInLeft}>
                            <Typography variant="small" >
                                Order Id: 123456
                            </Typography>
                        </MotionInView>

                        <MotionInView variants={varFadeInRight}>
                            <Typography variant="small" >
                                Staff Id: AER342
                            </Typography>
                        </MotionInView>
                    </Box>

                    <MotionInView variants={varFadeInUp}>
                        <CustomCard sx={{ marginTop: 2 }}>
                            <SelectionForm header="Select order" dynamicField="Table Number" />
                        </CustomCard>
                    </MotionInView>

                        <CustomCard sx={{ marginTop: 2 }}>
                            <SwiperCardSlider sliderBackground={sliderBackground} cardData={cardData} />
                        </CustomCard>
                </Container>
            </Page>
        </DashboardLayout>
    )
}