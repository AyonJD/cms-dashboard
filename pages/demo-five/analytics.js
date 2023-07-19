import {
  Box,
  CardHeader,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'
import Page from 'src/components/Page'
import CustomCard from 'src/components/card/CustomCard'
import useSettings from 'src/hooks/useSettings'
import demoThreeSidebarConfig from 'src/layouts/config/demoThreeSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'
import ChartLine from 'src/components/chart/ChartLine'
import ChartPie from 'src/components/chart/ChartPie'
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
} from 'src/components/animate'
import AccountsCard from 'src/components/_external-pages/AccountAnalytics'
import demoFiveSidebarConfig from 'src/layouts/config/demoFiveSidebarConfig'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

export default function Analytics() {
  const { themeStretch } = useSettings()

  const PRODUCT = [
    'Myelography',
    'Electromyography',
    'CT scan',
    'Blood test',
    'Ultrasound',
    'Complete blood count',
    'Electrocardiography',
    'Angiogram',
  ]
  const UNIT = [
    '1 Unit',
    '2 Unit',
    '3 Unit',
    '4 Unit',
    '5 Unit',
    '6 Unit',
    '7 Unit',
    '8 Unit',
  ]
  const tableData = Array.from(Array(8).keys()).map((_, index) => {
    return {
      product: PRODUCT[index],
      unit: UNIT[index],
    }
  })

  return (
    <DashboardLayout sideBarConfig={demoFiveSidebarConfig}>
      <Page title="CMS | Analytics">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <AccountsCard />

          <Box
            sx={{
              mt: 3,
              mb: 3,
              display: 'flex',
              justifyContent: 'space-between',
              gap: 5,
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <MotionInView variants={varFadeInLeft}>
              <CustomCard
                sx={{ width: 380, marginLeft: 'auto', marginRight: 'auto' }}
              >
                <CardHeader
                  title="Todays Analytics"
                  titleTypographyProps={{
                    sx: {
                      mb: 2.5,
                      lineHeight: '2rem !important',
                      letterSpacing: '0.15px !important',
                      textAlign: 'center',
                      marginTop: '-25px',
                    },
                  }}
                />
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ borderBottom: 'none' }}>
                          Item
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ borderBottom: 'none' }}
                        >
                          Volume
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {tableData.map((item, index) => (
                        <TableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {item.product}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {item.unit}
                          </StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CustomCard>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <CustomCard
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: { xs: 'auto', md: '439px' },
                }}
              >
                <CardHeader
                  title="Test Analysis"
                  titleTypographyProps={{
                    sx: {
                      mb: 2.5,
                      lineHeight: '2rem !important',
                      letterSpacing: '0.15px !important',
                      marginTop: '-25px',
                    },
                  }}
                />
                <ChartPie />
                <Typography
                  variant="body2"
                  sx={{ mt: 2, display: 'inline-block', textAlign: 'justify' }}
                >
                  Lorem ipsum sit amet, consectetur adipisicing elit.
                  Perferendis culpa, modi nostrum vitae, ipsum, alias sapiente
                  eligendi dolorem fuga enim beatae similique consequuntur! nim
                  beatae similique consequuntur modi nostrum!
                </Typography>
              </CustomCard>
            </MotionInView>
          </Box>

          <CustomCard>
            <CardHeader
              title="Peek Hour Analysis"
              titleTypographyProps={{
                sx: {
                  mb: 2.5,
                  lineHeight: '2rem !important',
                  letterSpacing: '0.15px !important',
                  textAlign: 'center',
                  marginTop: '-25px',
                },
              }}
            />
            <MotionInView variants={varFadeInUp}>
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    sm: '90%',
                    md: '60%',
                  },
                  margin: 'auto',
                }}
              >
                <ChartLine />
                <Typography
                  variant="body2"
                  sx={{ mt: 2, display: 'inline-block', textAlign: 'justify' }}
                >
                  Lorem ipsum sit amet, consectetur adipisicing elit.
                  Perferendis culpa, modi nostrum vitae, ipsum, alias sapiente
                  eligendi dolorem fuga beatae similique consequuntur! nim
                  beatae similique beatae consequuntur modi nostrum! Consectetur
                  nostrum
                </Typography>
              </Box>
            </MotionInView>
          </CustomCard>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
