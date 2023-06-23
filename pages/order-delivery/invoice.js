import { Box, Button, Container, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Page from 'src/components/Page';
import useSettings from 'src/hooks/useSettings';
import demoOneSidebarConfig from 'src/layouts/config/demoOneSidebarConfig';
import DashboardLayout from 'src/layouts/dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Radio from '@mui/material/Radio';
import CustomCard from 'src/components/card/CustomCard';
import { ButtonAnimate, MotionInView, varFadeInDown } from 'src/components/animate';
import BasicTable from 'src/components/_external-pages/table/BasicTable';

export default function Invoice() {
    const { themeStretch } = useSettings();

    const [formData, setFormData] = useState({
        date: new Date().toLocaleDateString(),
        currency: '৳ TAKA',
        discount: '',
        totalPayment: '',
        partialPayment: '',
        due: '',
    });

    function createData(product, unit, price, total) {
        return { product, unit, price, total };
    }

    const BASIC_TABLE = [
        createData('Frozen yoghurt', 2, 200, 400),
        createData('Ice cream sandwich', 1, 210, 210),
        createData('Eclair', 4, 79, 316),
        createData('Cupcake', 2, 50, 100),
        createData('Gingerbread', 8, 199, 1592)
    ];


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
            <Page title="Kitchen | Invoice">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Paper sx={{ p: 0 }}>
                        <CustomCard>
                            <Typography variant="h3" mb={1} align='center'>
                                {'Invoice'}
                            </Typography>
                            <Box sx={{ maxWidth: '100%' }}>
                                <form onSubmit={handleSubmit}>
                                    <MotionInView variants={varFadeInDown}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="h6" mb={2} align='right'>
                                                    Receipt No: 0001
                                                </Typography>
                                                <Typography variant="h6" align='right'>
                                                    Date: {formData.date}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <BasicTable tableData={BASIC_TABLE} />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Divider />
                                            </Grid>

                                            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                                <Grid item xs={12} sm={8} md={5}>
                                                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                        <InputLabel>Currency</InputLabel>
                                                        <Select
                                                            name="currency"
                                                            label="Currency"
                                                            value={formData.currency}
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value="৳ TAKA">৳ TAKA</MenuItem>
                                                            <MenuItem value="$ USD">$ USD</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>

                                                <Grid item xs={12} sm={12} md={5} >
                                                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                        <TextField
                                                            name="discount"
                                                            label="Discount"
                                                            value={formData.discount}
                                                            onChange={handleChange}
                                                            placeholder='Discount'
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>

                                                <Grid item xs={12} sm={12} md={5} >
                                                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                        <TextField
                                                            name="totalPayment"
                                                            label="Total Payment"
                                                            value={formData.totalPayment}
                                                            onChange={handleChange}
                                                            placeholder='Total Payment'
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12} sm={3}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <Typography variant="h6" mt={2} mb={1}>
                                                        Status
                                                    </Typography>
                                                    <Box sx={{ marginBottom: 0 }}>
                                                        <Radio
                                                            value="success"
                                                            name='selectedValue'
                                                            checked={formData.selectedValue === 'success'}
                                                            onChange={handleChange}
                                                            color="success"
                                                        />
                                                        <Typography variant="span">
                                                            Paid
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ marginBottom: 0 }}>
                                                        <Radio
                                                            value="error"
                                                            name='selectedValue'
                                                            checked={formData.selectedValue === 'error'}
                                                            onChange={handleChange}
                                                            color="error"
                                                        />
                                                        <Typography variant="span">
                                                            Not Paid
                                                        </Typography>
                                                    </Box>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} sm={4} md={4} >
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="partialPayment"
                                                        label="Partial Payment"
                                                        value={formData.partialPayment}
                                                        onChange={handleChange}
                                                        placeholder='Partial Payment'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} sm={5} md={5} >
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="due"
                                                        label="Due"
                                                        value={formData.due}
                                                        onChange={handleChange}
                                                        placeholder='Due'
                                                    />
                                                </FormControl>
                                            </Grid>

                                        </Grid>
                                    </MotionInView>

                                    <MotionInView variants={varFadeInDown}>
                                        <Grid sx={{ marginTop: 1 }} container spacing={4}>
                                            <Grid item xs={6} sm={6} md={3}>
                                                <ButtonAnimate sx={{ width: '100%' }} mediumClick={true}>
                                                    <Button
                                                        fullWidth
                                                        variant="outlined"
                                                        color="error"
                                                        sx={{ mr: 1, padding: '8px 0' }}
                                                    >
                                                        Cancel
                                                    </Button>
                                                </ButtonAnimate>
                                            </Grid>

                                            <Grid item xs={6} sm={6} md={3}>
                                                <ButtonAnimate sx={{ width: '100%' }} mediumClick={true}>
                                                    <Button
                                                        fullWidth
                                                        variant="outlined"
                                                        color="primary"
                                                        type="submit"
                                                        sx={{ padding: '8px 0' }}
                                                    >
                                                        Save
                                                    </Button>
                                                </ButtonAnimate>
                                            </Grid>

                                            <Grid item xs={6} sm={6} md={3}>
                                                <ButtonAnimate sx={{ width: '100%' }} mediumClick={true}>
                                                    <Button
                                                        fullWidth
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ mr: 1, padding: '8px 0', color: '#fff' }}
                                                    >
                                                        Print
                                                    </Button>
                                                </ButtonAnimate>
                                            </Grid>

                                            <Grid item xs={6} sm={6} md={3}>
                                                <ButtonAnimate sx={{ width: '100%' }} mediumClick={true}>
                                                    <Button sx={{ padding: '8px 0', color: '#fff' }} fullWidth variant="contained" color="error">
                                                        Delete
                                                    </Button>
                                                </ButtonAnimate>
                                            </Grid>
                                        </Grid>
                                    </MotionInView>
                                </form>
                            </Box>
                        </CustomCard>
                    </Paper>
                </Container>
            </Page>
        </DashboardLayout>
    )
}