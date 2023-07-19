import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import arrowIosUpwardFill from '@iconify/icons-eva/arrow-ios-upward-fill'
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill'
// material
import {
  Box,
  Table,
  Collapse,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Typography,
  IconButton,
} from '@mui/material'

// ----------------------------------------------------------------------

CollapsibleTable.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
}

export default function CollapsibleTable({ row }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            <Icon icon={open ? arrowIosUpwardFill : arrowIosDownwardFill} />
          </IconButton>
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell align="center">{row.customer}</TableCell>
        <TableCell align="right">{row.totalPrice}</TableCell>
        <TableCell align="right">{row.deliveryDate}</TableCell>
        <TableCell align="right">{row.comment}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Order Item</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.orderItem}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
