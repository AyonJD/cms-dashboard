import { Container, Grid, Paper, Typography } from '@mui/material'
import Page from 'src/components/Page'
import BasicTable from 'src/components/_external-pages/table/BasicTable'
import { MotionInView, varFadeInDown } from 'src/components/animate'
import CustomCard from 'src/components/card/CustomCard'
import ChartLine from 'src/components/chart/ChartLine'
import ChartPie from 'src/components/chart/ChartPie'
import useSettings from 'src/hooks/useSettings'
import demoTwoSidebarConfig from 'src/layouts/config/demoTowSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'

export default function Analytics() {
  const { themeStretch } = useSettings()

  return (
    <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
      <Page title="CMS | Analytics">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Paper sx={{ p: 0 }}>
            <CustomCard>
              <MotionInView variants={varFadeInDown}>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                  Todays Test
                </Typography>
                <BasicTable />
              </MotionInView>
            </CustomCard>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MotionInView variants={varFadeInDown}>
                  <CustomCard sx={{ marginTop: 4, height: '445px' }}>
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>
                      Product Sold
                    </Typography>
                    <ChartPie />
                  </CustomCard>
                </MotionInView>
              </Grid>
              <Grid item xs={12} md={6}>
                <MotionInView variants={varFadeInDown}>
                  <CustomCard sx={{ marginTop: 4, height: '445px' }}>
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>
                      Peek Hours
                    </Typography>
                    <ChartLine />
                  </CustomCard>
                </MotionInView>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
