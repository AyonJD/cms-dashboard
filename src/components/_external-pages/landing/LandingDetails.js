import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
// material
import { styled } from '@mui/material/styles'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
//
import { varFadeInRight } from '../../animate'
import Image from 'next/image'
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
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            width: {
              xs: '100%',
              sm: '100%',
              md: '50%',
            },
            marginRight: {
              xs: 0,
              sm: 0,
              md: 4,
            },
          }}
        >
          <Image
            src="/static/details_hero.jpg"
            layout="responsive"
            height={400}
            width={600}
            alt="details_hero"
            className="details_hero"
          />
          {useMediaQuery('(min-width: 900px)') ? (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 10,
                marginRight: -41,
                marginTop: 2,
              }}
            >
              <motion.div variants={varFadeInRight}>
                <Typography variant="h1">
                  <Typography
                    component="span"
                    variant="h1"
                    className="stroke-text"
                  >
                    Check
                  </Typography>{' '}
                  details of
                  <Typography
                    component="span"
                    variant="h1"
                    sx={{ color: 'primary.main' }}
                  >
                    &nbsp;CMS
                  </Typography>
                </Typography>
              </motion.div>
            </Box>
          ) : (
            <Box>
              <motion.div variants={varFadeInRight}>
                <Typography variant="h1" align="center" sx={{ marginTop: 5 }}>
                  Check details <br />
                  of
                  <Typography
                    component="span"
                    variant="h1"
                    sx={{ color: 'primary.main' }}
                  >
                    &nbsp;CMS
                  </Typography>
                </Typography>
              </motion.div>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '50%',
            },
          }}
        >
          <CustomCard sx={{ marginTop: 7 }}>
            <motion.div variants={varFadeInRight}>
              <Typography
                sx={{
                  display: 'inline-block',
                  textAlign: 'justify',
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                neque officia facilis inventore assumenda doloribus aliquam
                cumque incidunt, modi error?
              </Typography>
            </motion.div>
          </CustomCard>
        </Box>
      </Container>
    </RootStyle>
  )
}
