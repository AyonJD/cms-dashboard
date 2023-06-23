import { Container, Grid, Paper, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Page from "src/components/Page";
import useSettings from "src/hooks/useSettings";
import demoTwoSidebarConfig from "src/layouts/config/demoTowSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Calendar from "src/components/_external-pages/calendar/Calendar";
import CustomCard from "src/components/card/CustomCard";
import { MotionInView, varFadeInLeft, varFadeInRight } from "src/components/animate";

export default function Schedule() {
    const { themeStretch } = useSettings();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHours, setSelectedHours] = useState([]);

    const handleDateChange = (date) => {
        const selectedDate = new Date(date.$y, date.$M, date.$D);
        setSelectedDate(selectedDate);
    };

    const convertTo12HourFormat = (hour) => {
        if (hour === 12 || hour === 0) {
            return 12;
        } else {
            return hour % 12;
        }
    };

    const handleHourChange = (event) => {
        const { value } = event.target;
        setSelectedHours(value);
    };

    const hours = Array.from({ length: 13 }, (_, index) => index + 10);

    return (
        <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
            <Page title="Kitchen | Schedule">
                <Container maxWidth={themeStretch ? false : "xl"}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <MotionInView variants={varFadeInLeft}>
                                <CustomCard sx={{
                                    minHeight: {
                                        xs: 'auto',
                                        sm: 'auto',
                                        md: '446px'
                                    }
                                }}>
                                    <Typography variant="h5" gutterBottom>
                                        {selectedDate ? selectedDate.toDateString() : new Date().toDateString()}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Day:{" "}
                                        {selectedDate ?
                                            selectedDate.toLocaleDateString(undefined, {
                                                weekday: "long",
                                            }) : new Date().toLocaleDateString(undefined, {
                                                weekday: "long",
                                            })
                                        }
                                    </Typography>
                                    <FormControl fullWidth sx={{ marginTop: 4, marginBottom: 2 }}>
                                        <InputLabel>Select Hour</InputLabel>
                                        <Select
                                            value={selectedHours}
                                            onChange={handleHourChange}
                                            multiple={true}
                                            label="Select Hour"
                                        >
                                            {hours.map((hour) => (
                                                <MenuItem key={hour} value={hour}>
                                                    {`${convertTo12HourFormat(hour)} ${hour >= 12 ? "PM" : "AM"
                                                        }`}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {selectedHours.map((hour) => (
                                        <Grid sx={{ marginBottom: 2 }} item xs={12} key={hour}>
                                            <TextField
                                                label={`${convertTo12HourFormat(hour)} ${hour >= 12 ? "PM" : "AM"
                                                    }`}
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                                placeholder={`Enter your schedule for ${convertTo12HourFormat(
                                                    hour
                                                )} ${hour >= 12 ? "PM" : "AM"
                                                    }`}
                                            />
                                        </Grid>
                                    ))}
                                </CustomCard>
                            </MotionInView>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <MotionInView variants={varFadeInRight}>
                                <CustomCard>
                                    <Paper sx={{ p: 2 }}>
                                        <Calendar handleDateChange={handleDateChange} />
                                    </Paper>
                                </CustomCard>
                            </MotionInView>
                        </Grid>
                    </Grid>
                </Container>
            </Page>
        </DashboardLayout>
    );
}