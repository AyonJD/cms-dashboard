import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import Page from 'src/components/Page'
import useSettings from 'src/hooks/useSettings'
import demoOneSidebarConfig from 'src/layouts/config/demoOneSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Radio from '@mui/material/Radio'
import CustomCard from 'src/components/card/CustomCard'
import {
  ButtonAnimate,
  MotionInView,
  varFadeInDown,
} from 'src/components/animate'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation'
import { Router, useRouter } from 'next/router'

export default function OrderForm() {
  const { themeStretch } = useSettings()
  const router = useRouter()

  const [formData, setFormData] = useState({
    orderId: '',
    date: new Date().toISOString().slice(0, 10),
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    currency: '৳ TAKA',
    testCategory: '',
    productName: '',
    productRate: '',
    productQuantity: 1,
    discount: '',
    totalPayment: '',
    paid: '',
    notPaid: '',
    partialPayment: '',
    due: '',

    selectedValue: '',
  })
  const [selectedTestCategory, setSelectedTestCategory] = useState('')
  const [selectedTestName, setSelectedTestName] = useState('')

  const testData = [
    {
      testCategory: 'Cardiology',
      testName: ['Electrocardiography', 'Cardiac stress test', 'Angiogram'],
    },
    {
      testCategory: 'Neurology',
      testName: ['Myelography', 'Electromyography', 'CT scan'],
    },
    {
      testCategory: 'Pediatrics',
      testName: ['Blood test', 'Ultrasound', 'Complete blood count'],
    },
  ]

  const handleSelectChange = event => {
    const { name, value } = event.target

    if (name === 'testCategory') {
      // Update the selected test category
      setSelectedTestCategory(value)
      // Reset the selected test name
      setSelectedTestName('')
    } else if (name === 'testName') {
      // Update the selected test name
      setSelectedTestName(value)
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const increaseQuantity = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      productQuantity: parseInt(prevFormData.productQuantity) + 1,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <DashboardLayout sideBarConfig={demoOneSidebarConfig}>
      <Page title="CMS | Patient Service Form">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Paper sx={{ p: 0 }}>
            <CustomCard>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  border: '1px solid #000',
                  padding: 4,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  mb: 2,
                }}
              >
                <MedicalInformationIcon
                  sx={{
                    color: 'primary.main',
                    fontSize: 40,
                  }}
                />
              </Box>
              <Typography align="center" variant="h5" mb={5}>
                Patient Service Form
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
                            placeholder="Order ID"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                          <TextField
                            name="date"
                            label="Date"
                            type="date"
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
                            placeholder="First Name"
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
                            placeholder="Last Name"
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
                            placeholder="Phone Number"
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
                            placeholder="Email Address"
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
                            placeholder="Address"
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
                          Service List
                        </Typography>

                        <Divider />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                          <InputLabel>Test Category</InputLabel>
                          <Select
                            name="testCategory"
                            label="Test Category"
                            value={selectedTestCategory}
                            onChange={handleSelectChange}
                          >
                            {testData.map((item, index) => (
                              <MenuItem key={index} value={item.testCategory}>
                                {item.testCategory}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                          <InputLabel>Test Name</InputLabel>
                          <Select
                            name="testName"
                            label="Test Name"
                            value={selectedTestName}
                            onChange={handleSelectChange}
                          >
                            {testData
                              .find(
                                item =>
                                  item.testCategory === selectedTestCategory
                              )
                              ?.testName.map((name, index) => (
                                <MenuItem key={index} value={name}>
                                  {name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          flexDirection: {
                            xs: 'column',
                            sm: 'row',
                          },
                          mt: 2,
                        }}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          sx={{
                            display: {
                              xs: 'block',
                              sm: 'flex',
                            },
                            alignItems: ' center',
                            justifyContent: 'center',
                            marginRight: {
                              xs: 'auto',
                              sm: 0,
                            },
                            marginBottom: {
                              xs: 2,
                              sm: 0,
                            },
                          }}
                        >
                          <FormControl
                            fullWidth
                            sx={{
                              maxWidth: {
                                xs: '100%',
                                sm: '50%',
                              },
                            }}
                          >
                            <Typography variant="h6" mt={2} mb={1} ml={1}>
                              Status
                            </Typography>
                            <Box sx={{ marginBottom: 0 }}>
                              <Radio
                                value="info"
                                name="selectedValue"
                                checked={formData.selectedValue === 'info'}
                                onChange={handleChange}
                                color="info"
                              />
                              <Typography variant="span">
                                Partial Paid
                              </Typography>
                            </Box>
                            <Box sx={{ marginBottom: 0 }}>
                              <Radio
                                value="success"
                                name="selectedValue"
                                checked={formData.selectedValue === 'success'}
                                onChange={handleChange}
                                color="success"
                              />
                              <Typography variant="span">Full Paid</Typography>
                            </Box>
                            <Box sx={{ marginBottom: 0 }}>
                              <Radio
                                value="error"
                                name="selectedValue"
                                checked={formData.selectedValue === 'error'}
                                onChange={handleChange}
                                color="error"
                              />
                              <Typography variant="span">Not Paid</Typography>
                            </Box>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                <TextField
                                  name="discount"
                                  label="Discount"
                                  value={formData.discount}
                                  onChange={handleChange}
                                  placeholder="Discount"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                <TextField
                                  name="totalPayment"
                                  label="Total Payment"
                                  value={formData.totalPayment}
                                  onChange={handleChange}
                                  placeholder="Total Payment"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                <TextField
                                  name="partialPayment"
                                  label="Partial Payment"
                                  value={formData.partialPayment}
                                  onChange={handleChange}
                                  placeholder="Partial Payment"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                              <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                                <TextField
                                  name="due"
                                  label="Due"
                                  value={formData.due}
                                  onChange={handleChange}
                                  placeholder="Due"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </MotionInView>

                  <MotionInView variants={varFadeInDown}>
                    <Grid sx={{ marginTop: 1 }} container spacing={4}>
                      <Grid item xs={6} sm={6} md={3}>
                        <ButtonAnimate
                          sx={{ width: '100%' }}
                          mediumClick={true}
                        >
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
                        <ButtonAnimate
                          sx={{ width: '100%' }}
                          mediumClick={true}
                        >
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
                        <ButtonAnimate
                          sx={{ width: '100%' }}
                          mediumClick={true}
                        >
                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mr: 1, padding: '8px 0', color: '#fff' }}
                            onClick={() =>
                              router.push(
                                window.open(
                                  `/invoice/${new Date().getMilliseconds()}`,
                                  '_blank'
                                )
                              )
                            }
                          >
                            Print
                          </Button>
                        </ButtonAnimate>
                      </Grid>

                      <Grid item xs={6} sm={6} md={3}>
                        <ButtonAnimate
                          sx={{ width: '100%' }}
                          mediumClick={true}
                        >
                          <Button
                            sx={{ padding: '8px 0', color: '#fff' }}
                            fullWidth
                            variant="contained"
                            color="error"
                          >
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
