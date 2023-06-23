import { useState } from 'react';
// material
import {
    Box,
    Table,
    Switch,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    FormControlLabel
} from '@mui/material';
// components
import Scrollbar from 'src/components/Scrollbar';
//
import SortingSelectingHead from './SortingSelectingHead';
import SortingSelectingToolbar from './SortingSelectingToolbar';

// ----------------------------------------------------------------------

function createData(orderId, customer, totalPrice, deliveryDate, comment, status, orderItem) {
    return { orderId, customer, totalPrice, deliveryDate, comment, status, orderItem };
}

const SORTING_SELECTING_TABLE = [
    createData('1234', 'John Doe', '1200 TK', new Date().toLocaleDateString(), 'Comment', 'Pending', 'Pizza'),
    createData('8754', 'Alex', '900 TK', new Date().toLocaleDateString(), 'Comment', 'Pending', 'Burger'),
    createData('5792', 'Selena', '1800 TK', new Date().toLocaleDateString(), 'Comment', 'Pending', 'Sandwich'),
    createData('8473', 'Alex', '900 TK', new Date().toLocaleDateString(), 'Comment', 'Pending', 'Burger'),
    createData('9724', 'Sakib', '1600 TK', new Date().toLocaleDateString(), 'Comment', 'Pending', 'Wrap'),
    createData('5784', 'Kashem', '350 TK', new Date().toLocaleDateString(), 'Comment', 'Pending', 'Pizza'),
    createData('7846', 'Sakib', '1600 TK', new Date().toLocaleDateString(), 'Comment', 'Pending', 'Wrap')
];

const TABLE_HEAD = [
    {
        id: 'orderId',
        numeric: false,
        disablePadding: true,
        label: 'Order Id'
    },
    {
        id: 'customer',
        numeric: true,
        disablePadding: false,
        label: 'Customer'
    },
    {
        id: 'orderItem',
        numeric: true,
        disablePadding: false,
        label: 'Order Item'
    },
    {
        id: 'totalPrice',
        numeric: true,
        disablePadding: false,
        label: 'Total Price'
    },
    {
        id: 'deliveryDate',
        numeric: true,
        disablePadding: false,
        label: 'Delivery Date'
    },
    {
        id: 'comment',
        numeric: true,
        disablePadding: false,
        label: 'Comment'
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Status'
    },

];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export default function SortingSelecting({ formHeader, tableHead, tableData }) {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const DYNAMIC_TABLE_HEAD = tableHead ? tableHead : TABLE_HEAD;
    const DYNAMIC_TABLE_DATA = tableData ? tableData : SORTING_SELECTING_TABLE;

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = DYNAMIC_TABLE_DATA.map((n) => n.orderId);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, orderId) => {
        const selectedIndex = selected.indexOf(orderId);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, orderId);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (orderId) => selected.indexOf(orderId) !== -1;

    // Avoid a layout jump when reaching the last page with empty DYNAMIC_TABLE_DATA.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - DYNAMIC_TABLE_DATA.length) : 0;

    return (
        <>
            <SortingSelectingToolbar formHeader={formHeader} numSelected={selected.length} />

            <Scrollbar>
                <TableContainer sx={{ minWidth: 800 }}>
                    <Table size={dense ? 'small' : 'medium'}>
                        <SortingSelectingHead
                            order={order}
                            orderBy={orderBy}
                            headLabel={DYNAMIC_TABLE_HEAD}
                            numSelected={selected.length}
                            onRequestSort={handleRequestSort}
                            rowCount={DYNAMIC_TABLE_DATA.length}
                            onSelectAllClick={handleSelectAllClick}
                        />
                        <TableBody>
                            {stableSort(DYNAMIC_TABLE_DATA, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.orderId);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.orderId)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.orderId}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={isItemSelected} />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.orderId}
                                            </TableCell>
                                            <TableCell align="right">{row.customer}</TableCell>
                                            <TableCell align="right">{row.orderItem}</TableCell>
                                            <TableCell align="right">{row.totalPrice}</TableCell>
                                            <TableCell align="right">{row.deliveryDate}</TableCell>
                                            {
                                                !tableHead && (
                                                    <>
                                                        <TableCell align="right">{row.comment}</TableCell>
                                                        <TableCell align="right">{row.status}</TableCell>
                                                    </>
                                                )
                                            }
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Scrollbar>

            <Box sx={{ position: 'relative' }}>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={DYNAMIC_TABLE_DATA.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Box
                    sx={{
                        px: 3,
                        py: 1.5,
                        top: 0,
                        position: { md: 'absolute' }
                    }}
                >
                    <FormControlLabel control={<Switch checked={dense} onChange={handleChangeDense} />} label="Dense padding" />
                </Box>
            </Box>
        </>
    );
}
