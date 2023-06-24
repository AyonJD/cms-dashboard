import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Page from "src/components/Page";
import CustomCard from "src/components/card/CustomCard";
import useSettings from "src/hooks/useSettings";
import demoThreeSidebarConfig from "src/layouts/config/demoThreeSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";
import ChartLine from "src/components/chart/ChartLine";
import ChartPie from "src/components/chart/ChartPie";
import { MotionInView, varFadeInLeft, varFadeInRight, varFadeInUp } from "src/components/animate";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function Analytics() {
    const { themeStretch } = useSettings();

    const PRODUCT = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6', 'Product 7', 'Product 8']
    const UNIT = ['1 Unit', '2 Unit', '3 Unit', '4 Unit', '5 Unit', '6 Unit', '7 Unit', '8 Unit']
    const tableData = Array.from(Array(8).keys()).map((_, index) => {
        return {
            product: PRODUCT[index],
            unit: UNIT[index],
        }
    })

    return (
        <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
            <Page title="CMS | Analytics">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Box sx={{
                        mb: 3, display: 'flex', justifyContent: 'space-between', gap: 5,
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <MotionInView variants={varFadeInLeft}>
                            <CustomCard>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 300 }} size="small">
                                        <TableHead>
                                            <TableRow >
                                                <TableCell style={{ borderBottom: 'none' }}>Item</TableCell>
                                                <TableCell align="right" style={{ borderBottom: 'none' }}>Volume</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {tableData.map((item, index) => (
                                                <TableRow key={index}>
                                                    <StyledTableCell component="th" scope="row">
                                                        {item.product}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">{item.unit}</StyledTableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CustomCard>
                        </MotionInView>

                        <MotionInView variants={varFadeInRight}>
                            <CustomCard sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <ChartPie />
                            </CustomCard>
                        </MotionInView>
                    </Box>

                    <CustomCard>
                        <MotionInView variants={varFadeInUp}>
                            <Box sx={{ width: '60%', margin: 'auto' }}>
                                <ChartLine />
                            </Box>
                        </MotionInView>
                    </CustomCard>
                </Container>
            </Page>
        </DashboardLayout>
    )
}