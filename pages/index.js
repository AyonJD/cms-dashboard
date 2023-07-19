// layouts
import MainLayout from 'src/layouts/main'
// material
import { styled } from '@mui/material/styles'
// components
import Page from 'src/components/Page'
import { LandingHero } from 'src/components/_external-pages/landing'
import LandingOfferedSolutions from 'src/components/_external-pages/landing/LandingOfferedSolutions'
import { useEffect, useState } from 'react'
import CustomLoadingScreen from 'src/components/CustomLoadingScreen'

import LandingDetails from 'src/components/_external-pages/landing/LandingDetails'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%',
})

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}))

// ----------------------------------------------------------------------

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <CustomLoadingScreen />
  }

  return (
    <>
      <MainLayout>
        <RootStyle title="CMS" id="move_top">
          <LandingHero />
          <ContentStyle>
            <LandingOfferedSolutions />
            <LandingDetails />
          </ContentStyle>
        </RootStyle>
      </MainLayout>
      
    </>
  )
}
