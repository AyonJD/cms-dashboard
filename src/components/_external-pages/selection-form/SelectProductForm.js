import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { MotionInView, varFadeInDown } from "src/components/animate";
import CustomCard from "src/components/card/CustomCard";

export default function SelectProductForm() {
    const [formData, setFormData] = useState({
        category: '',
        product: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <Box sx={{ maxWidth: '100%' }}>
            <form >
                <MotionInView variants={varFadeInDown}>
                    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                        <Grid item xs={12}>
                            <Typography variant="h5" mb={2} align="center">
                                Select Category
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                <InputLabel id="product">Select Category</InputLabel>
                                <Select
                                    labelId="category"
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    label="Select Category"
                                    onChange={handleChange}
                                >
                                    <MenuItem value=""> <em>None</em> </MenuItem>
                                    <MenuItem value="1">Category 1</MenuItem>
                                    <MenuItem value="2">Category 2</MenuItem>
                                    <MenuItem value="3">Category 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {
                            formData.category && (
                                <Grid item xs={12} sm={4}>
                                    {/* <Typography variant="h5" mb={2} align="center">
                                        Select Product
                                    </Typography> */}
                                    <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                        <InputLabel id="product">Select Product</InputLabel>
                                        <Select
                                            labelId="product"
                                            id="product"
                                            name="product"
                                            value={formData.product}
                                            label="Select Product"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value=""> <em>None</em> </MenuItem>
                                            <MenuItem value="1">Product 1</MenuItem>
                                            <MenuItem value="2">Product 2</MenuItem>
                                            <MenuItem value="3">Product 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            )
                        }


                        <Grid item xs={12}>

                        </Grid>
                        <Grid item xs={12} sm={10} md={8}>
                            <CustomCard>
                                <Typography variant="h5" mb={2} align="center">
                                    Order Form
                                </Typography>

                                <TextField
                                    fullWidth
                                    label="Client Name"
                                    name="clientName"
                                    onChange={handleChange}
                                    required
                                    value={formData.clientName}
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    required
                                    value={formData.phoneNumber}
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="emailAddress"
                                    onChange={handleChange}
                                    required
                                    value={formData.emailAddress}
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    onChange={handleChange}
                                    required
                                    value={formData.address}
                                    variant="outlined"
                                />
                            </CustomCard>
                        </Grid>

                    </Grid>
                </MotionInView>
            </form>
        </Box>
    )
}
