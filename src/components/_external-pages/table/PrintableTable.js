import {
  Box,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

const PrintableTable = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  /**
   * This function prints the contents of a specific HTML element and restores the original contents
   * of the page after printing.
   */
  const printDiv = () => {
    if (typeof window !== 'undefined') {
      let printContents = document.getElementById('download_section').innerHTML
      let originalContents = document.body.innerHTML
      document.body.innerHTML = printContents
      window.print()
      document.body.innerHTML = originalContents
    }
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      printDiv()
    }
  }, [isLoaded])

  return (
    <Box sx={{ maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Card className="invoice_popup" id="download_section">
        <h2 className="brand_name">CMS</h2>
        <h6 className="sub_name">Client Management Solutions</h6>
        <div className="invoice_header_wrapper">
          <h1 class="invoice_header">INVOICE</h1>
        </div>

        <div className="inv_id_section">
          <div className="invoice_to_left">
            <h3>Invoice to:</h3>
            <h3 className="client_name">Client Name</h3>

            <h5>Contact: 01900000000000</h5>

            <h5>Email: admin@gmail.com</h5>

            <h5>Address: Dhaka</h5>
          </div>
          <div className="invoice_id_section_right">
            <div className="invoice_id invoice_id_top">
              <h3 className="invoice_id_header">Invoice ID</h3>
              <h5>#HZEY4654</h5>
            </div>
            <div className="invoice_id">
              <h3 className="invoice_id_header">Date</h3>
              <h5 className="invoice_date">
                {new Date().toLocaleDateString('en-US')}
              </h5>
            </div>
          </div>
        </div>

        <Grid
          sx={{ marginBottom: 15, paddingLeft: 10, paddingRight: 10 }}
          container
          spacing={5}
        >
          <Grid item xs={12}>
            <TableContainer>
              <Table
                className="invoice_table"
                sx={{ minWidth: 800 }}
                aria-label="table in dashboard"
              >
                <TableHead className="invoice_table_head">
                  <TableRow>
                    <TableCell className="table_cell_no_border" align="left">
                      Serial
                    </TableCell>
                    <TableCell className="table_cell_no_border" align="center">
                      Test Name
                    </TableCell>
                    <TableCell className="table_cell_no_border" align="center">
                      Payment Amount
                    </TableCell>
                    <TableCell className="table_cell_no_border" align="center">
                      Paid Amount
                    </TableCell>
                    <TableCell className="table_cell_no_border" align="right">
                      Due Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">
                      <Typography>1</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>Blood Test</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>1000</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>100</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography>0</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div className="invoice_footer">
              <div className="left_footer_section">
                <h5 className="footer_header">Thank you for your business</h5>
                <div>
                  <h5 className="footer_header">Terms & Conditions</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, corporis.
                  </p>
                </div>
              </div>
              <div className="right_footer_section">
                <div className="sub_total_wrapper">
                  <h4 className="sub_total">Total Amount : 1000</h4>
                  <h4 className="sub_total">Paid Amount : 1000</h4>
                  <h4 className="sub_total">Due Amount : 00</h4>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="footer_border_wrapper">
          <h5 className="authorized_sign">Authorized Sign</h5>
        </div>
      </Card>
    </Box>
  )
}

export default PrintableTable
