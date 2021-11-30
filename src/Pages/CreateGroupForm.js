import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";


import TF from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
<<<<<<< Updated upstream
=======
import NavBar from '../Components/NavBar.js';
import emailjs from "emailjs-com";
import './MenuCards.css';
import './Global.css';

>>>>>>> Stashed changes

const defaultValues = {
    groupName: "",
    desiredLocation: "",
    maxPrice: 0,
  };

export default function CreateGroupForm() {
    const [formValues, setFormValues] = useState(defaultValues)
    const [dateValue, setDateValue] = React.useState([null, null]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

      const handleSliderChange = (name) => (e, value) => {
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

      async function handleSubmit(event) {
        event.preventDefault();
        console.log(formValues);
        console.log(dateValue);
        const response = await fetch('http://localhost:3001/api/creategroup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...formValues,
                earliestDate: dateValue[0],
                latestDate: dateValue[1],
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			localStorage.setItem("token", data.user)
			alert("Group creation successful")
			window.location.href = "/dashboard"
		} else {
            console.log(data.status)
			alert("Please fix the errors before continuing")
		}
      };

    return (
<<<<<<< Updated upstream
        <div style={{padding: '40px'}}>
            <h1>Create Group Form</h1>
=======
        <div>
            <div className='navyBG'>
                <NavBar/>
                <h1>Create Group Form</h1>
>>>>>>> Stashed changes

                <form onSubmit={handleSubmit}>
                    <Grid container alignItems="left" justify="left" direction="column" style={{padding: '40px'}}>

<<<<<<< Updated upstream
                    <Grid item style={{padding: '20px'}}>
                    <TextField
                        id="name-input"
                        name="groupName"
                        label="Group Name"
                        type="text"
                        value={formValues.groupName}
                        onChange={handleInputChange}
                    />
                    </Grid>

                    <Grid item style={{padding: '20px'}}>
                    <TextField
                        id="location-input"
                        name="desiredLocation"
                        label="Location (If known)"
                        type="text"
                        value={formValues.desiredLocation}
                        onChange={handleInputChange}
                    />
                    </Grid>
=======
                        <Grid item style={{padding: '20px'}}>
                        <TextField
                            id="name-input"
                            name="groupName"
                            label="Group Name"
                            type="text"
                            value={formValues.groupName}
                            onChange={handleInputChange}
                        />
                        </Grid>

                        <Grid item style={{padding: '20px'}}>
                        <TextField
                            id="name-input"
                            name="creatorName"
                            label="Creator Name"
                            type="text"
                            value={creatorName}
                            onChange={(e) => setcreatorName(e.target.value)}
                        />
                        </Grid>

                        <Grid item style={{padding: '20px'}}>
                        <TextField
                            id="name-input"
                            name="creatorEmail"
                            label="Creator Email"
                            type="text"
                            value={creatorEmail}
                            onChange={(e) => setcreatorEmail(e.target.value)}
                        />
                        </Grid>
>>>>>>> Stashed changes

                        <Grid item style={{padding: '20px'}}>
                        <TextField
                            id="location-input"
                            name="desiredLocation"
                            label="Location (If known)"
                            type="text"
                            value={formValues.desiredLocation}
                            onChange={handleInputChange}
                        />
<<<<<<< Updated upstream
                    </div>
    
                    {"$" + formValues.maxPrice}
                    </Grid>

                <Grid item style={{padding: '20px'}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateRangePicker
                            startText="Earliest Date"
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
                
                    <Button variant="contained" color="primary" type="submit">
                    Submit
                    </Button>
                </Grid>

            </form>

            

        </div>
    )
=======
                        </Grid>

                        <Grid item style={{padding: '20px'}}>
                        <div style={{ width: "400px" }}>
                            Max Price Acceptable per person
                            <Slider
                            value={formValues.maxPrice}
                            onChange={handleSliderChange("maxPrice")}
                            defaultValue={200}
                            step={1}
                            min={0}
                            max={1000}
                            marks={[
                                {
                                value: 100,
                                label: "$100",
                                },
                                {
                                value: 500,
                                label: "$500",
                                },
                                {
                                value: 1000,
                                label: "$1000",
                                },
                            ]}
                            valueLabelDisplay="off"
                            />
                        </div>

                        {"$" + formValues.maxPrice}
                        </Grid>

                    <Grid item style={{padding: '20px'}}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateRangePicker
                                startText="Earliest Date"
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


                    <Grid item style={{padding: '20px'}}>
                    <div style={{ width: "400px" }}>
                        Add emails of members for them to join
                        <TextField
                            id="emails-input"
                            name="membersEmails"
                            label="Comma separate emails"
                            type="text"
                            value={membersEmails}
                            onChange={(e) => setmembersEmails(e.target.value)}
                        />
                    </div>
                    </Grid>

                    <Grid item style={{padding: '20px'}}>
                        <div style={{ width: "400px" }}>
                            Enter a secured pin for your group
                            <TextField
                                id="secured-pin"
                                name="securedPin"
                                label="Secured pin"
                                type="text"
                                value={securedPin}
                                onChange={(e) => setsecuredPin(e.target.value)}
                            />
                        </div>
                    </Grid>
                        <Button variant="contained" color="primary" type="submit">
                        Submit
                        </Button>
                    </Grid>
                </form>
            </div>
        </div>
    </div>
)
>>>>>>> Stashed changes
}
