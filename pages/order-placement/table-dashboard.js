import DashboardLayout from "src/layouts/dashboard";
import demoOneSidebarConfig from "../../src/layouts/config/demoOneSidebarConfig";
import Page from "src/components/Page";
import { Box, Container, Grid, Typography, alpha, useTheme } from "@mui/material";
import useSettings from "src/hooks/useSettings";
import CustomCard from "src/components/card/CustomCard";
import TableWithChairs from "src/components/_external-pages/table-with-chair";


export default function TableDashboard() {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    const tableData = [
        {
            id: 'DDMMYY000',
            name: 'Table 1',
            status: 'Active',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: isLight ? '#F7B011' : '#FFD800'
        },
        {
            id: 'DDMMYY004',
            name: 'Table 5',
            status: 'Served',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: isLight ? '#038003' : '#00FF00'
        },
        {
            id: 'DDMMYY001',
            name: 'Table 2',
            status: 'Active',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: isLight ? '#F7B011' : '#FFD800'
        },
        {
            id: 'DDMMYY002',
            name: 'Table 3',
            status: 'Empty',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: (theme) =>
                `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[500], 0.12)}`
        },
        {
            id: 'DDMMYY005',
            name: 'Table 6',
            status: 'Empty',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: (theme) =>
                `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[500], 0.12)}`
        },
        {
            id: 'DDMMYY003',
            name: 'Table 4',
            status: 'Active',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: isLight ? '#F7B011' : '#FFD800'
        },
    ]
    const tableStyles = {
        boxHeight: 166,
        boxWidth: 400,
        tableHeight: 133.33,
        tableWidth: 133.33,
        chairHorizontalPosition: 100,
        chairVerticalPosition: -14,
        chairVerticalHeight: 20,
        chairVerticalWidth: 66.67,
        chairHorizontalHeight: 66.67,
        chairHorizontalWidth: 20,
    }

    return (
        <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
            <Page title="CMS | Table Dashboard">
                <Container >
                    <Grid container spacing={3} >
                        {
                            tableData.map((table, index) => (

                                <Grid key={index} item xs={12} md={6} >
                                    <CustomCard sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                                        <Grid container spacing={2} sx={{ width: '100%' }}>
                                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                                <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 4, marginLeft: 2 }}>
                                                    {table.name}
                                                </Typography>
                                                <TableWithChairs status={table.status} tableStyles={tableStyles} tableBackground={table.background} />
                                            </Grid>
                                            <Grid item xs={12} sx={{ marginLeft: 2, marginTop: 2, textAlign: 'center' }}>
                                                <p>Id: {table.id}</p>
                                                <p>Order Time: {table.orderTime}</p>
                                                <p>
                                                    Items: {table.items.map((item, index) => (
                                                        <span key={index}>
                                                            {item}{index !== table.items.length - 1 && ', '}
                                                        </span>
                                                    ))}
                                                </p>
                                            </Grid>
                                        </Grid>

                                    </CustomCard>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Page>
        </DashboardLayout >
    )
}