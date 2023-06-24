import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import Page from "src/components/Page";
import { MotionInView, varFadeInDown, varFadeInUp } from "src/components/animate";
import CustomCard from "src/components/card/CustomCard";
import useSettings from "src/hooks/useSettings";
import demoThreeSidebarConfig from "src/layouts/config/demoThreeSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";


export default function CurrentAccounts() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    const ORDER_ITEMS = ['Pizza', 'Burger', 'Sandwich', 'Pasta', 'Noodles', 'Fries'];
    const ITEMS_UNIT = [2, 3, 1, 5, 1, 4];
    const ITEMS_PRICE = [500, 300, 400, 200, 100, 200];
    const TAX = [10, 10, 20, 20, 30, 30];

    const cardData = Array.from({ length: 6 }, (_, index) => ({
        orderItems: ORDER_ITEMS[index],
        itemsUnit: ITEMS_UNIT[index],
        itemsPrice: ITEMS_PRICE[index],
        tax: TAX[index],
    }));

    return (
        <DashboardLayout sideBarConfig={demoThreeSidebarConfig} >
            <Page title="CMS | Current Accounts">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <MotionInView variants={varFadeInDown}>
                        <CustomCard>
                            <Typography variant="h3" component="h1" paragraph>
                                Current Accounts
                            </Typography>

                            <TableContainer sx={{ borderWidth: 1, borderStyle: 'solid', borderLeft: 0, borderRight: 0, borderTop: 0 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Order Items</TableCell>
                                            <TableCell align="center">Items Unit</TableCell>
                                            <TableCell align="center">Items Price</TableCell>
                                            <TableCell align="center">Tax</TableCell>
                                            <TableCell align="right">Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {cardData.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{row.orderItems}</TableCell>
                                                <TableCell align="center">{row.itemsUnit}</TableCell>
                                                <TableCell align="center">{row.itemsPrice}</TableCell>
                                                <TableCell align="center">{row.tax}</TableCell>
                                                <TableCell align="right">{row.itemsUnit * row.itemsPrice + row.tax}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Typography sx={{ textAlign: 'right', marginRight: 2, marginTop: 2 }} variant="h6" component="h6" paragraph>
                                {
                                    `Subtotal: ${cardData.reduce((acc, cur) => acc + cur.itemsUnit * cur.itemsPrice, 0)}`
                                }
                            </Typography>
                        </CustomCard>
                    </MotionInView>
                </Container>
            </Page>
        </DashboardLayout >
    )
}