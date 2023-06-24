import { Box, Container, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// hooks
import useSettings from 'src/hooks/useSettings';
// components
import Page from 'src/components/Page';
// Config
import demoOneSidebarConfig from '../../src/layouts/config/demoOneSidebarConfig';
import TableWithChairs from 'src/components/_external-pages/table-with-chair';
import SelectionForm from 'src/components/_external-pages/selection-form';
import CustomCard from 'src/components/card/CustomCard';
import { MotionInView, varFadeInLeft, varFadeInRight } from 'src/components/animate';
// ----------------------------------------------------------------------

export default function OrderSelection() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    const tableBackground = (theme) =>
        `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[500], 0.12)}`;

    const tableStyles = {
        boxHeight: 400,
        boxWidth: 400,
        tableHeight: 200,
        tableWidth: 200,
        chairHorizontalPosition: 60,
        chairVerticalPosition: 60,
        chairVerticalHeight: 30,
        chairVerticalWidth: 100,
        chairHorizontalHeight: 100,
        chairHorizontalWidth: 30,
    }

    return (
        <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
            <Page title="CMS | Order Selection">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: {
                                xs: 'column', // Set flexDirection to column on small devices
                                sm: 'column', // Set flexDirection to column on small devices
                                md: 'row', // Reset flexDirection to row on medium and larger devices
                            },
                        }}
                    >
                        <MotionInView variants={varFadeInLeft}>
                            <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '-30px' }}>
                                Table One
                            </Typography>

                            <TableWithChairs tableStyles={tableStyles} tableBackground={tableBackground} />

                            <Typography variant="small" gutterBottom sx={{ textAlign: 'center', marginTop: '-30px', display: 'block' }}>
                                Order Id: 123456
                            </Typography>
                            <Typography variant="small" sx={{ textAlign: 'center', display: 'block', marginBottom: 1 }}>
                                Order Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </Typography>

                        </MotionInView>

                        <MotionInView variants={varFadeInRight} sx={{
                            width: {
                                xs: '100%', // Set width to 100% on small devices
                                sm: '60%', // Set width to 100% on small devices
                                md: '40%', // Reset width to 40% on medium and larger devices
                            },
                            marginTop: {
                                sm: 5, // Set marginTop to 2 on small devices
                                md: 0, // Reset marginTop on medium and larger devices
                            },
                        }}>
                            <CustomCard >
                                <SelectionForm dynamicField="Staff" />
                            </CustomCard>
                        </MotionInView>
                    </Box>
                </Container>
            </Page>
        </DashboardLayout>
    );
}
