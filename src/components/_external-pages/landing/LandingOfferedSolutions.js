import { motion } from 'framer-motion'
// material
import { useTheme, styled, alpha } from '@mui/material/styles'
import {
  Box,
  Grid,
  Card,
  Link,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
} from '@mui/material'
//
import {
  varZoomIn,
  varFadeIn,
  varFadeInUp,
  MotionInView,
  varFadeInDown,
  varFadeInRight,
} from '../../animate'
import CustomCard from 'src/components/card/CustomCard'
import TapasIcon from '@mui/icons-material/Tapas'

import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import HealingIcon from '@mui/icons-material/Healing'
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy'
import { useEffect, useState } from 'react'
import { getStorage } from 'api/useStorage'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

// ----------------------------------------------------------------------

const SOLUTIONTITLE = [
  'Order Placement',
  'Order Booking',
  'Order Delivery',
  'Demo Four',
  'Demo Five',
  'Demo Six',
]

const SOLUTION_SUB_TITLE = [
  'Lorem ipsum dolor sit',
  'Lorem ipsum dolor sit',
  'Lorem ipsum dolor sit',
  'Lorem ipsum dolor sit',
  'Lorem ipsum dolor sit',
  'Lorem ipsum dolor sit',
]

const SOLUTION_URL = [
  '/order-placement/patient-service-form',
  '/order-booking/book-service',
  '/order-delivery/select-product',
  '/demo-four/analytics',
  '/demo-five/analytics',
  '/',
]
const SOLUTION_ICON = [
  MedicationLiquidIcon,
  HealingIcon,
  LocalPharmacyIcon,
  LocalPharmacyIcon,
  LocalPharmacyIcon,
  LocalPharmacyIcon,
]

const SOLUtION_ITEMS = [...Array(6)].map((_, index) => ({
  title: SOLUTIONTITLE[index],
  subTitle: SOLUTION_SUB_TITLE[index],
  icon: SOLUTION_ICON[index],
  url: SOLUTION_URL[index],
}))

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

export default function LandingOfferedSolutions() {
  const [token, setToken] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const token = getStorage('demo_token')
    if (token) {
      setToken(token)
    }
  }, [])

  const handleRedirect = url => {
    if (!token) {
      toast.error('Please login to continue')
      setTimeout(() => {
        router.push('/auth/login')
      }, 1000)
    } else {
      router.push(url)
    }
  }

  return (
    <RootStyle>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1">
                Start your new <br />
                journey with
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ color: 'primary.main' }}
                >
                  &nbsp;CMS
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{
                  display: 'inline-block',
                  textAlign: 'justify',
                  marginTop: 4,
                  marginBottom: 4,
                  width: {
                    xs: '90%',
                    sm: '70%',
                    md: '50%',
                  },
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                culpa quo quis animi earum illo pariatur labore magnam with
                consectetur earum!
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ maxWidth: '800px', mt: 3 }}>
          {SOLUtION_ITEMS.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Link href={item.url} passHref>
                <MotionInView
                  variants={
                    index === 0 || index === 1 ? varFadeInDown : varFadeInUp
                  }
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <CustomCard
                      cardIndex={index}
                      sx={{
                        borderRadius: '50%',
                        width: {
                          xs: '50%',
                          sm: '60%',
                          md: '80%',
                        },
                        paddingTop: {
                          xs: '38%',
                          sm: '45%',
                          md: '65%',
                        },
                        position: 'relative',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid #34346D',
                        overflow: 'hidden',
                      }}
                    >
                      <Stack spacing={2}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            textAlign: 'center',
                          }}
                        >
                          <item.icon
                            sx={{ color: 'primary.main' }}
                            style={{ fontSize: 50, mb: 2 }}
                          />
                          <Typography
                            sx={{
                              color: 'primary.main',
                            }}
                            variant="h4"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: 'primary.main',
                              fontSize: {
                                xs: 10,
                                sm: 12,
                                md: 14,
                              },
                            }}
                            variant="body2"
                          >
                            {item.subTitle}
                          </Typography>
                        </div>
                      </Stack>
                    </CustomCard>
                  </div>
                </MotionInView>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  )
}
