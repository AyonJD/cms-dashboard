import { Box, Container, Paper, Typography } from '@mui/material'
import { useRef } from 'react'
import Page from 'src/components/Page'
import CustomCountUp from 'src/components/_external-pages/count-up/CustomCountUp'
import CollapsibleTable from 'src/components/_external-pages/table'
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
} from 'src/components/animate'

import CustomCard from 'src/components/card/CustomCard'
import useSettings from 'src/hooks/useSettings'
import demoFourSidebarConfig from 'src/layouts/config/demoFourSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'

export default function Analytics() {
  const { themeStretch } = useSettings()

  const COUNT_TITLE = ['Total Accounts', 'Paid Accounts', 'Due Accounts']
  const COUNT = [1000, 1000, 1000]
  const countData = [...Array(3)].map((_, index) => ({
    count: COUNT[index],
    countTitle: COUNT_TITLE[index],
  }))

  return (
    <DashboardLayout sideBarConfig={demoFourSidebarConfig}>
      <Page title="CMS | Order Breakdown">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Paper sx={{ p: 0 }}>
            <MotionInView variants={varFadeInLeft}>
              <Typography
                variant="h5"
                sx={{ textAlign: 'center', marginBottom: 2, marginTop: 3 }}
              >
                {new Date().toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </Typography>
              <CustomCard sx={{ background: '#22255C' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    paddingTop: 0,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      width: '70%',
                      justifyContent: 'space-between',
                    }}
                  >
                    {countData.map((count, index) => (
                      <CustomCountUp
                        key={index}
                        count={count.count}
                        countTitle={count.countTitle}
                      />
                    ))}
                  </Box>
                </Box>
              </CustomCard>
            </MotionInView>

            <CustomCard sx={{ marginTop: 4 }}>
              <MotionInView variants={varFadeInRight}>
                <CollapsibleTable />
              </MotionInView>
            </CustomCard>
          </Paper>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
