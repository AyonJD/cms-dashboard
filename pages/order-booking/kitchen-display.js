import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import Page from "src/components/Page";
import CustomCard from "src/components/card/CustomCard";
import useSettings from "src/hooks/useSettings";
import demoTwoSidebarConfig from "src/layouts/config/demoTowSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";


export default function CMSDisplay() {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';

    const tableData = [
        {
            id: 'DDMMYY000',
            name: 'Table 1',
            staff: 'Staff 1',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: isLight ? '#F7B011' : '#FFD800'
        },
        {
            id: 'DDMMYY004',
            name: 'Table 5',
            staff: 'Staff 2',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: isLight ? '#038003' : '#00FF00'
        },
        {
            id: 'DDMMYY001',
            name: 'Table 2',
            staff: 'Staff 3',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: isLight ? '#F7B011' : '#FFD800'
        },
        {
            id: 'DDMMYY002',
            name: 'Table 3',
            staff: 'Staff 4',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: (theme) =>
                `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[500], 0.12)}`
        },
        {
            id: 'DDMMYY005',
            name: 'Table 6',
            staff: 'Staff 5',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: (theme) =>
                `${alpha(isLight ? theme.palette.common.black : theme.palette.grey[500], 0.12)}`
        },
        {
            id: 'DDMMYY003',
            name: 'Table 4',
            staff: 'Staff 6',
            orderTime: '12:00 PM',
            items: ['Product 1 (2 units)', 'Product 2 (1 unit)'],
            background: isLight ? '#F7B011' : '#FFD800'
        },
    ]

    return (
        <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
            <Page title="CMS | CMS Display">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Grid container spacing={3}>
                        {
                            tableData.map((table, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <CustomCard sx={{ marginTop: 2 }}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                                                <Typography variant="small" sx={{ fontSize: 13, marginBottom: 0.5 }}>
                                                    {table.name}
                                                </Typography>
                                                <Typography variant="small" sx={{ fontSize: 13, marginBottom: 0.5 }}>
                                                    Id: {table.id}
                                                </Typography>
                                                <Typography variant="small" sx={{ fontSize: 13, marginBottom: 0.5 }}>
                                                    Staff: {table.staff}
                                                </Typography>
                                                <Typography variant="small" sx={{ fontSize: 13 }}>
                                                    Order Time: {table.orderTime}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ borderWidth: 1.5, borderStyle: '', marginTop: 2 }}>
                                                <TableContainer component={Paper}>
                                                    <Table size="small" aria-label="a dense table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell>Item</TableCell>
                                                                <TableCell align="right">Volume</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {table.items.map((row, index) => (
                                                                <TableRow key={index}>
                                                                    <TableCell component="th" scope="row">{row.split('(')[0]} </TableCell>
                                                                    <TableCell align="right">{row.split('(')[1].split(')')[0]}</TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                                <Button variant="contained" sx={{ marginTop: 4, width: '100%' }}>Mark as Served</Button>
                                            </Grid>
                                        </Grid>
                                    </CustomCard>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Page>
        </DashboardLayout>
    )
}