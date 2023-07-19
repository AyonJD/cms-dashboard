import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import flashFill from '@iconify/icons-eva/flash-fill'
// next
import NextLink from 'next/link'
// material
import { styled } from '@mui/material/styles'
import { Box, Link, Stack, Button, Container, Typography } from '@mui/material'
// routes
import { PATH_DASHBOARD } from '../../../routes/paths'
//
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
  varZoomIn,
  varFadeInDown,
} from '../../animate'
import { FONT_MONO } from 'src/theme/typography'

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}))

const ContentStyle = styled(props => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: '100%',
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up('md')]: {
      margin: 'unset',
      textAlign: 'center',
    },
  })
)

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <div className="hero_background"></div>

        <Container>
          <ContentStyle
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Logo */}
            {/* <motion.img
              style={{ width: 200, height: 200, cursor: 'pointer' }}
              variants={varZoomIn}
              src='/static/brand/logo.png'
              alt='hero'
            /> */}

            {/* Main heading */}
            <motion.div variants={varFadeInDown} style={{ marginTop: 0 }}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                CMS
              </Typography>
            </motion.div>

            {/* Sub heaing */}
            <motion.div variants={varFadeInUp} style={{ marginTop: 0 }}>
              <Typography variant="h4" sx={{ color: 'common.white' }}>
                Client Management Solutions
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInUp} style={{ marginTop: 0 }}>
              <Typography
                variant="h6"
                sx={{ color: 'common.white', fontFamily: FONT_MONO }}
              >
                Seamless Selection Made Easy
              </Typography>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  )
}
