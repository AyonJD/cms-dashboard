import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { MotionInView, varFadeInDown } from 'src/components/animate'
import CustomCard from 'src/components/card/CustomCard'
import { testData } from 'src/constant/constant'

export default function SelectProductForm() {
  const [formData, setFormData] = useState({
    category: '',
    product: '',
  })
  const [selectedTestCategory, setSelectedTestCategory] = useState('')
  const [selectedTestName, setSelectedTestName] = useState('')

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

  return (
    <Box sx={{ maxWidth: '100%' }}>
      <form>
        <MotionInView variants={varFadeInDown}>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12}>
              <Typography variant="h5" mb={2} align="center">
                Select Category
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
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

            {selectedTestCategory && (
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth sx={{ maxWidth: '100%' }}>
                  <InputLabel>Test Name</InputLabel>
                  <Select
                    name="testName"
                    label="Test Name"
                    value={selectedTestName}
                    onChange={handleSelectChange}
                  >
                    {testData
                      .find(item => item.testCategory === selectedTestCategory)
                      ?.testName.map((name, index) => (
                        <MenuItem key={index} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
            )}

            <Grid item xs={12}></Grid>
            <Grid item xs={12} sm={10} md={8}>
              <CustomCard>
                <Typography variant="h5" mb={2} align="center">
                  Book Service
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

                <FormControl fullWidth>
                  <Typography variant="h6" mt={2} mb={1} ml={1}>
                    Status
                  </Typography>
                  <Box
                    sx={{
                      marginBottom: 0,
                      display: 'flex',
                      alignItems: {
                        xs: 'flex-start',
                        sm: 'center',
                      },
                      flexDirection: {
                        xs: 'column',
                        sm: 'row',
                      },
                    }}
                  >
                    <Box>
                      <Radio
                        value="info"
                        name="selectedValue"
                        checked={formData.selectedValue === 'info'}
                        onChange={handleChange}
                        color="info"
                      />
                      <Typography variant="span" sx={{ marginRight: 2 }}>
                        Sample from home
                      </Typography>
                    </Box>
                    <Box>
                      <Radio
                        value="success"
                        name="selectedValue"
                        checked={formData.selectedValue === 'success'}
                        onChange={handleChange}
                        color="success"
                      />
                      <Typography variant="span" sx={{ marginRight: 2 }}>
                        Walk in sample
                      </Typography>
                    </Box>
                  </Box>
                </FormControl>
              </CustomCard>
            </Grid>
          </Grid>
        </MotionInView>
      </form>
    </Box>
  )
}
