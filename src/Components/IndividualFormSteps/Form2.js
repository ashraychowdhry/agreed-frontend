import React, {useContext, useState} from 'react';
import AppContext from "./AppContext"
import './styles.css';

import Grid from "@material-ui/core/Grid";
import TF from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

export default function Form2() {

    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;
    const [dateValue, setDateValue] = React.useState([null, null]);

    const next = () => {
        if (updateContext.arrivalDate == null) {
            console.log('Please enter your arrival date')
        } else if (updateContext.departureDate == null) {
            console.log('Plese enter your departure date')
        } else {
            updateContext.setStep(updateContext.currentPage + 1)
            updateContext.setArrivalDate(dateValue[0])
            updateContext.setDepartureDate(dateValue[1])
        }
    };

    return (
        <div className="container">
            <p>Enter your details</p>
            <div className="formContain">
                <form className="form">
                    <Grid item style={{padding: '20px'}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateRangePicker
                                startText="Earliest Date"
                                minDate={updateContext.earliest}
                                maxDate={updateContext.latest}
                                endText="Latest Date"
                                value={dateValue}
                                onChange={(newValue) => {
                                setDateValue(newValue);
                                }}
                                renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                    <TF {...startProps} />
                                    <Box sx={{ mx: 2 }}> to </Box>
                                    <TF {...endProps} />
                                </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <div className="multipleButtons">
                    <button className="multipleButton" value="Previous" type="button" onClick={() => updateContext.setStep(updateContext.currentPage - 1)}>Previous </button>
                    <button className="multipleButton" value="Next" type="button" onClick={next}>Next </button>
                    </div>
                </form>
            </div>
        </div>
    );
};