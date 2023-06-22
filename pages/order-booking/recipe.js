import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useState } from "react";
import Page from "src/components/Page";
import { MotionInView, varFadeInLeft, varFadeInRight } from "src/components/animate";
import CustomCard from "src/components/card/CustomCard";
import useSettings from "src/hooks/useSettings";
import demoTwoSidebarConfig from "src/layouts/config/demoTowSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";

// Custom styles for the hover effect
const styles = {
    hoverCell: {
        '&:hover': {
            backgroundColor: '#1ccaff',
        },
        borderRadius: '10px',
    },
};

function Recipe({ classes }) {
    const { themeStretch } = useSettings();
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const DATA_TITLE = ['Recipe One', 'Recipe Two', 'Recipe Three', 'Recipe Four', 'Recipe Five']
    const DATA_IMAGE = ['/static/mock-images/demo-one-1.png', '/static/mock-images/demo-one-2.png', '/static/mock-images/demo-one-3.png', '/static/mock-images/demo-one-4.png', '/static/mock-images/demo-one-5.png']

    const cardData = Array.from({ length: 5 }, (_, index) => ({
        title: DATA_TITLE[index],
        image: DATA_IMAGE[index],
    }))

    return (
        <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
            <Page title="Kitchen | Recipe">
                <Container maxWidth={themeStretch ? false : 'xl'}>
                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between', flexDirection: {
                            xs: 'column',
                            md: 'row'
                        }
                    }}>
                        <MotionInView variants={varFadeInLeft} MotionInView sx={{
                            width: {
                                xs: '100%',
                                sm: '80%',
                                md: '30%'
                            },
                            margin: 'auto'
                        }}>
                            <CustomCard>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell> Recipe List</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cardData.map((item, index) => (
                                                <TableRow onClick={() => setSelectedIndex(index)} key={index}>
                                                    <TableCell className={classes.hoverCell}> {item.title}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CustomCard>
                        </MotionInView>

                        <MotionInView sx={{
                            width: {
                                xs: '100%',
                                sm: '80%',
                                md: '50%'
                            },
                            margin: 'auto'
                        }} variants={varFadeInRight}>
                            <CustomCard sx={{
                                marginTop: {
                                    xs: 2,
                                    md: 0
                                }
                            }}>
                                <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}> Recipe Details</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={cardData[selectedIndex].image} alt="recipe" />
                                </Box>
                                <Typography variant="small" sx={{ display: 'block', textAlign: 'center', fontSize: '15px' }}> {cardData[selectedIndex].title}</Typography>
                            </CustomCard>
                        </MotionInView>
                    </Box>
                </Container>
            </Page>
        </DashboardLayout >
    )
}

export default withStyles(styles)(Recipe);