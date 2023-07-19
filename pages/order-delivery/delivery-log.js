import { Container, Paper, Typography } from '@mui/material'
import Page from 'src/components/Page'
import SortingSelecting from 'src/components/_external-pages/table/sorting'
import { MotionInView, varFadeInDown } from 'src/components/animate'
import CustomCard from 'src/components/card/CustomCard'
import useSettings from 'src/hooks/useSettings'
import demoThreeSidebarConfig from 'src/layouts/config/demoThreeSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'

function createData(
  orderId,
  testName,
  deliveryDate,
  totalPaid,
  totalDue,
  status
) {
  return { orderId, testName, deliveryDate, totalPaid, totalDue, status }
}

const SORTING_SELECTING_TABLE = [
  createData(
    '1234',
    'CT scan',
    new Date().toLocaleDateString(),
    2000,
    300,
    'In process'
  ),
  createData('8754', 'Blood Test', '7/15/2023', 200, 100, 'In process'),
  createData('5792', 'Ultrasound', '7/17/2023', 1500, 500, 'Delivered'),
  createData('8473', 'ECG', '7/20/2023', 3000, 400, 'Delivered'),
  createData('9724', 'MRI', '7/21/2023', 7000, 1000, 'Delivered'),
]

const TABLE_HEAD = [
  {
    id: 'orderId',
    numeric: false,
    disablePadding: true,
    label: 'Delivery Id',
  },
  {
    id: 'testName',
    numeric: false,
    disablePadding: true,
    label: 'Test',
  },
  {
    id: 'deliveryDate',
    numeric: false,
    disablePadding: true,
    label: 'Date',
  },
  {
    id: 'totalPaid',
    numeric: true,
    disablePadding: true,
    label: 'Total Paid',
  },
  {
    id: 'totalDue',
    numeric: true,
    disablePadding: true,
    label: 'Total Due',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: true,
    label: 'Status',
  },
]

export default function DeliveryLog() {
    const { themeStretch } = useSettings()

    const openPDF = () => {
      const pdfUrl = '/static/pdf.pdf'
      window.open(pdfUrl, '_blank')
    }
  return (
    <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
      <Page title="CMS | Delivery Log">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Paper sx={{ p: 0 }}>
            <CustomCard sx={{ mb: 2 }}>
              <Typography  mb={1} variant="h5">
                You have 2 new reports
              </Typography>
              <Typography
              onClick={openPDF}
                sx={{
                  display: 'inline-block',
                  width: '100%',
                }}
                variant="body2"
              >
                1. Myelography FTB (Tested on 3rd July, 2023)
              </Typography>
              <Typography
              onClick={openPDF}
                sx={{
                  display: 'inline-block',
                  width: '100%',
                }}
                variant="body2"
              >
                2. CT scan (Tested on 2nd July, 2023)
              </Typography>
            </CustomCard>
            <CustomCard sx={{ width: 'auto', overflowX: 'auto' }}>
              <MotionInView variants={varFadeInDown}>
                <SortingSelecting
                  formHeader="Delivery Log"
                  tableHead={TABLE_HEAD}
                  tableData={SORTING_SELECTING_TABLE}
                />
              </MotionInView>
            </CustomCard>
          </Paper>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
