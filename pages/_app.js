// scroll bar
import 'simplebar/src/simplebar.css'
// editor
import 'react-quill/dist/quill.snow.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// next
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
// material
import { NoSsr } from '@mui/material'
// contexts
import { SettingsProvider } from 'src/contexts/SettingsContext'
import { CollapseDrawerProvider } from 'src/contexts/CollapseDrawerContext'
// theme
import ThemeConfig from 'src/theme'
import GlobalStyles from 'src/theme/globalStyles'
// utils
import createEmotionCache from 'src/utils/createEmotionCache'
// components
import Settings from 'src/components/settings'
import RtlLayout from 'src/components/RtlLayout'
import ProgressBar from 'src/components/ProgressBar'
import ThemePrimaryColor from 'src/components/ThemePrimaryColor'
import { Toaster } from 'react-hot-toast'
// Global css
import '../styles/global.css'

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <>
      <SettingsProvider>
        <CollapseDrawerProvider>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>

            <ThemeConfig>
              <ThemePrimaryColor>
                <RtlLayout>
                  <NoSsr>
                    <Settings />
                  </NoSsr>
                  <GlobalStyles />
                  <ProgressBar />
                  <Component {...pageProps} />
                </RtlLayout>
              </ThemePrimaryColor>
            </ThemeConfig>
          </CacheProvider>
        </CollapseDrawerProvider>
      </SettingsProvider>
      <Toaster />
    </>
  )
}
