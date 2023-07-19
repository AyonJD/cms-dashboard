import { motion } from 'framer-motion'
import NextLink from 'next/link'
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
  'Lorem ipsum dolor sit, amet consectetur.',
  'Lorem ipsum dolor sit, amet consectetur.',
  'Lorem ipsum dolor sit, amet consectetur.',
  'Lorem ipsum dolor sit, amet consectetur.',
  'Lorem ipsum dolor sit, amet consectetur.',
  'Lorem ipsum dolor sit, amet consectetur.',
]

const SOLUTION_URL = [
  '/order-placement/order-form',
  '/order-booking/select-product',
  '/order-delivery/select-product',
  '/',
  '/',
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

        <Grid container spacing={5}>
          {SOLUtION_ITEMS.map((item, index) => (
            <Grid
              onClick={() => handleRedirect(item.url)}
              key={index}
              item
              xs={12}
              sm={4}
            >
              <MotionInView
                variants={
                  index === 0 || index === 1 ? varFadeInDown : varFadeInUp
                }
              >
                <CustomCard
                  cardIndex={index}
                  sx={{
                    height: {
                      xs: 180,
                      sm: 260,
                      md: 200,
                    },
                    borderRadius: 5,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid #34346D',
                  }}
                >
                  <Stack spacing={2}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <item.icon
                        sx={{ color: 'primary.main' }}
                        style={{ fontSize: 50, mb: 2 }}
                      />
                      <Typography
                        sx={{ color: 'primary.main', textAlign: 'center' }}
                        variant="h4"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{ color: 'primary.main', textAlign: 'center' }}
                        variant="body2"
                      >
                        {item.subTitle}
                      </Typography>
                    </div>
                  </Stack>
                </CustomCard>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  )
}
