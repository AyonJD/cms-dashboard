// material
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
} from '@mui/material'
// components
import Scrollbar from '../../Scrollbar'
//
import CollapsibleTableRow from './CollapsibleTableRow'

// ----------------------------------------------------------------------

function createData(
  orderId,
  customer,
  totalPrice,
  deliveryDate,
  comment,
  status,
  orderItem,
) {
  return {
    orderId,
    customer,
    totalPrice,
    deliveryDate,
    comment,
    status,
    history: [
      {
        date: deliveryDate,
        customerId: customer,
        orderItem: orderItem,
        price: totalPrice,
      },
    ],
  }
}

const COLLAPSIBLE_TABLE = [
  createData(
    '1234',
    'Rakib Hassan',
    1200,
    new Date().toLocaleDateString(),
    'Comment here',
    ' In process',
    'Blood Test'
  ),
  createData(
    '8754',
    'Sakib Ahmed',
    900,
    '7/15/2023',
    'Comment here',
    ' In process',
    'CT scan'
  ),
  createData(
    '5792',
    'Sanjida Khatun',
    1800,
    '7/10/2023',
    'Comment here',
    'Completed',
    'Ultrasound'
  ),
  createData(
    '7944',
    'Kashem',
    350,
    '7/18/2023',
    'Comment here',
    'Pending',
    'ECG'
  ),
]

export default function CollapsibleTable() {
  return (
    <Scrollbar>
      <TableContainer sx={{ minWidth: 800, mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">Order Id</TableCell>
              <TableCell align="center">Patient </TableCell>
              <TableCell align="right">Total Price</TableCell>
              <TableCell align="right">Delivery Date</TableCell>
              <TableCell align="right">Comment</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {COLLAPSIBLE_TABLE.map(row => (
              <CollapsibleTableRow key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  )
}
