import { Container, Paper } from '@mui/material'
import Page from 'src/components/Page'
import SelectProductForm from 'src/components/_external-pages/selection-form/SelectProductForm'
import SortingSelecting from 'src/components/_external-pages/table/sorting'
import useSettings from 'src/hooks/useSettings'
import demoThreeSidebarConfig from 'src/layouts/config/demoThreeSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'

function createData(orderId, totalPrice, deliveryDate, time, status, testName) {
  return {
    orderId,
    totalPrice,
    deliveryDate,
    time,
    status,
    testName,
  }
}

const SORTING_SELECTING_TABLE = [
  createData(
    '1234',
    1200,
    new Date().toLocaleDateString(),
    '10 AM',
    ' In process',
    'Blood Test'
  ),
  createData('8754', 900, '7/15/2023', '12 PM', ' In process', 'CT scan'),
  createData('5792', 1800, '7/10/2023', '08 AM', 'Completed', 'Ultrasound'),
  createData('7944', 350, '7/18/2023', '05 PM', 'Pending', 'ECG'),
]

const TABLE_HEAD = [
  {
    id: 'orderId',
    numeric: false,
    disablePadding: true,
    label: 'Order Id',
  },
  {
    id: 'testName',
    numeric: true,
    disablePadding: false,
    label: 'Test',
  },
  {
    id: 'totalPrice',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'deliveryDate',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'samplingTime',
    numeric: true,
    disablePadding: false,
    label: 'Sampling Time',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
]

export default function SelectProduct() {
  const { themeStretch } = useSettings()
  return (
    <DashboardLayout sideBarConfig={demoThreeSidebarConfig}>
      <Page title="CMS | Previous Tests">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Paper sx={{ p: 0 }}>
            <SortingSelecting
              tableHead={TABLE_HEAD}
              tableData={SORTING_SELECTING_TABLE}
              formHeader="User View "
            />
          </Paper>
        </Container>
      </Page>
    </DashboardLayout>
  )
}
