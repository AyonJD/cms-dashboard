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

export default function OrderForm() {
    const { themeStretch } = useSettings();

    const [formData, setFormData] = useState({
        orderId: '',
        date: new Date().toISOString().slice(0, 10),
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        currency: '৳ TAKA',
        productId: '',
        productName: '',
        productRate: '',
        productQuantity: 1,
        discount: '',
        totalPayment: '',
        paid: '',
        notPaid: '',
        partialPayment: '',
        due: '',

        selectedValue: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const increaseQuantity = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            productQuantity: parseInt(prevFormData.productQuantity) + 1,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
            <Page title="CMS | Order Form">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Paper sx={{ p: 0 }}>
                        <CustomCard>
                            <Typography variant="h5" mb={4}>
                                {'Order Form'}
                            </Typography>
                            <Box sx={{ maxWidth: '100%' }}>
                                <form onSubmit={handleSubmit}>
                                    <MotionInView variants={varFadeInDown}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="orderId"
                                                        label="Order ID"
                                                        value={formData.orderId}
                                                        onChange={handleChange}
                                                        placeholder='Order ID'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="date"
                                                        label="Date"
                                                        type='date'
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="firstName"
                                                        label="First Name"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        placeholder='First Name'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="lastName"
                                                        label="Last Name"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        placeholder='Last Name'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="phone"
                                                        label="Phone Number"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder='Phone Number'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="email"
                                                        label="Email Address"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder='Email Address'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="address"
                                                        label="Address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                        placeholder='Address'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
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

                                            <Grid item xs={12}>
                                                <Typography variant="h5" mt={2} mb={1}>
                                                    Order List
                                                </Typography>

                                                <Divider />
                                            </Grid>

                                            <Grid item xs={5} sm={5} md={3}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="productId"
                                                        label="Product ID"
                                                        value={formData.productId}
                                                        onChange={handleChange}
                                                        placeholder='Product ID'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={7} sm={7} md={4}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="productName"
                                                        label="Product Name"
                                                        value={formData.productName}
                                                        onChange={handleChange}
                                                        placeholder='Product Name'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={5} sm={5} md={2}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="productRate"
                                                        label="Product Rate"
                                                        value={formData.productRate}
                                                        onChange={handleChange}
                                                        placeholder='Product Rate'
                                                        type='number'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={4} sm={5} md={2}>
                                                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                                    <TextField
                                                        name="productQuantity"
                                                        label="Quantity"
                                                        value={formData.productQuantity}
                                                        onChange={handleChange}
                                                        placeholder='Quantity'
                                                        type='number'
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={3} sm={2} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                                <AddCircleIcon onClick={increaseQuantity} color='primary' sx={{ fontSize: 30, cursor: 'pointer' }} />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Divider />
                                            </Grid>

                                            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
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