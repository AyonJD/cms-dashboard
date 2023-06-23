// material
import { Table, TableRow, TableHead, TableBody, TableCell, TableContainer } from '@mui/material';
// components
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

function createData(product, unit, staff, status, date = new Date().toLocaleDateString()) {
    return { product, unit, date, staff, status };
}

const BASIC_TABLE = [
    createData('Frozen yoghurt', 2, 'Staff One', 'Pending'),
    createData('Ice cream sandwich', 1, 'Staff Two', 'Served'),
    createData('Eclair', 4, 'Staff One', 'Accepted'),
    createData('Cupcake', 2, 'Staff four', 'Pending'),
    createData('Gingerbread', 8, 'Staff Three', 'Served')
];

// ----------------------------------------------------------------------

export default function BasicTable({ tableData }) {
    const rows = tableData ? tableData : BASIC_TABLE;
    return (
        <Scrollbar>
            <TableContainer sx={{ minWidth: 800, mt: 3 }}>
                <Table>
                    <TableHead>
                        {
                            tableData ? (
                                <TableRow>
                                    <TableCell>Serial</TableCell>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="center">Unit</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                </TableRow>
                            ) : (
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="center">Unit</TableCell>
                                    <TableCell align="right">Staff</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                </TableRow>
                            )
                        }

                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row.index}>
                                {
                                    tableData && (
                                        <TableCell>
                                            {index + 1}
                                        </TableCell>
                                    )
                                }
                                <TableCell>
                                    {row.product}
                                </TableCell>
                                <TableCell align="center">{row.unit}</TableCell>
                                {
                                    tableData ? (
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
                                    )
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Scrollbar>
    );
}
