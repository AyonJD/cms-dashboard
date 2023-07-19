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

// ----------------------------------------------------------------------

function createData(test, unit, staff, status, date) {
  return { test, unit, date, staff, status }
}

const BASIC_TABLE = [
  createData('Blood Test', 2, 'Staff One', 'Pending', '7/10/2023'),
  createData('Diabetes panel', 1, 'Staff Two', 'In Process', '7/14/2023'),
  createData('ECG', 1, 'Staff One', 'Completed', '7/15/2023'),
  createData('X-Ray', 1, 'Staff four', 'Completed', '7/18/2023'),
  createData('MRI', 1, 'Staff Three', 'Completed', '7/20/2023'),
]

// ----------------------------------------------------------------------

export default function BasicTable({ tableData }) {
  const rows = tableData ? tableData : BASIC_TABLE
  return (
    <Scrollbar>
      <TableContainer sx={{ minWidth: 800, mt: 3 }}>
        <Table>
          <TableHead>
            {tableData ? (
              <TableRow>
                <TableCell>Serial</TableCell>
                <TableCell>Test</TableCell>
                <TableCell align="center">Unit</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>Test</TableCell>
                <TableCell align="center">Unit</TableCell>
                <TableCell align="right">Assigned Staff</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.index}>
                {tableData && <TableCell>{index + 1}</TableCell>}
                <TableCell>{row.test}</TableCell>
                <TableCell align="center">{row.unit}</TableCell>
                {tableData ? (
                  <>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                  </>
                ) : (
                  <>
                    <TableCell align="right">{row.staff}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  )
}
