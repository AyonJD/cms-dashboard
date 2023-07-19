import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
// material
import { styled, alpha } from '@mui/material/styles'
import { Box, Grid, Stack, Container, Typography } from '@mui/material'
//
import {
  varFadeInRight,
} from '../../animate'
import CustomCard from 'src/components/card/CustomCard'

// ----------------------------------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

export default function LandingDetails() {
  const detailsRef = useRef(null)

  useEffect(() => {
    if (window.location.hash === '#details') {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])


  return (
    <RootStyle>
      <Container
        ref={detailsRef}
        id="details"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
          },
        }}
      >
        <Grid container spacing={5}></Grid>

        <Box>
          <motion.div variants={varFadeInRight}>
            <Typography variant="h1">
              Check details <br />
              of
              <Typography
                component="span"
                variant="h1"
                sx={{ color: 'primray.main' }}
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
                marginRight: {
                  xs: 0,
                  sm: 0,
                  md: 4,
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              enim vero accusamus unde nulla quia exercitationem, consectetur
              excepturi harum.
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </RootStyle>
  )
}
