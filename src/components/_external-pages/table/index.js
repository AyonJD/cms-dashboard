// material
import { Table, TableRow, TableHead, TableBody, TableCell, TableContainer } from '@mui/material';
// components
import Scrollbar from '../../Scrollbar';
//
import CollapsibleTableRow from './CollapsibleTableRow';

// ----------------------------------------------------------------------

function createData(orderId, customer, totalPrice, deliveryDate, comment, status, orderItem, price = 100) {
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
                amount: 3,
                price: price
            },
            {
                date: deliveryDate,
                customerId: customer,
                orderItem: orderItem,
                amount: 1,
                price: price
            }
        ]
    };
}

const COLLAPSIBLE_TABLE = [
    createData('1234', 'John Doe', 1200, new Date().toLocaleDateString(), 'Comment here', 'Status', 'Pizza'),
    createData('8754', 'Alex', 900, new Date().toLocaleDateString(), 'Comment here', 'Status', 'Burger'),
    createData('5792', 'Selena', 1800, new Date().toLocaleDateString(), 'Comment here', 'Status', 'Sandwich'),
    createData('7944', 'Kashem', 350, new Date().toLocaleDateString(), 'Comment here', 'Status', 'Pizza'),
    createData('7846', 'Sakib', 1600, new Date().toLocaleDateString(), 'Comment here', 'Status', 'Wrap')
];

export default function CollapsibleTable() {
    return (
        <Scrollbar>
            <TableContainer sx={{ minWidth: 800, mt: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align='left'>Order Id</TableCell>
                            <TableCell align="center">Customer</TableCell>
                            <TableCell align="right">Total Price</TableCell>
                            <TableCell align="right">Delivery Date</TableCell>
                            <TableCell align="right">Comment</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {COLLAPSIBLE_TABLE.map((row) => (
                            <CollapsibleTableRow key={row.orderId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Scrollbar>
    );
}
