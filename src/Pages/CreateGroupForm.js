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
import NavBar from '../Components/NavBar.js';
import emailjs from "emailjs-com";
import './Global.css';

const defaultValues = {
    groupName: "",
    desiredLocation: "",
    maxPrice: 0,
    securedPin: "",
  };

export default function CreateGroupForm() {
    const [formValues, setFormValues] = useState(defaultValues)
    const [creatorName, setcreatorName] = useState("")
    const [creatorEmail, setcreatorEmail] = useState("")
    const [membersEmails, setmembersEmails] = useState([])
    const [securedPin, setsecuredPin] = useState("")
    const [email, setEmail] = useState("")

    const [dateValue, setDateValue] = React.useState([null, null]);

    var uID = localStorage.getItem("username")

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

        /*
        (()=>{ 
            for(let i = 0; i < membersEmails.length; i++  ) {

                setEmail(membersEmails[i])
                emailjs.sendForm(
                "service_9e1t1sb",
                "template_05jwoih",
                event.target,
                "user_iKEVY9oLoC77kNCkxXmTw" ).then(res => {
                    console.log(email)
                    console.log(membersEmails[i])
                }).catch(err => console.log(err))
                setEmail("")
            }
        })()
        */
        const response = await fetch('http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/creategroup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...formValues,
                earliestDate: dateValue[0],
                latestDate: dateValue[1],
                userID: uID,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			localStorage.setItem("token", data.user)
            localStorage.setItem("currentGroup", data.id)
			alert("Group creation successful: " + data.id)
			window.location.href ="/individualform"
		} else {
            console.log(data.status)
			alert("Please fix the errors before continuing")
		}
      };

    return (
        <div>
            <div className='blueBG'>
            <NavBar/>
            <form onSubmit={handleSubmit} className='menuCard'>
                <Grid container alignItems="left" justify="left" direction="column" style={{padding: '10px'}}>
                <h3 className='redText'>Create Group Form</h3>
                    <Grid className='centerHorizontal'>
                        <TextField item style={{width: 350}}
                            id="name-input"
                            name="groupName"
                            label="Group Name"
                            type="text"
                            value={formValues.groupName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <div className='centerHorizontal'>
                        <Grid item style={{padding: '5px'}}>
                            <TextField
                                id="name-input"
                                name="creatorName"
                                label="Creator Name"
                                type="text"
                                value={creatorName}
                                onChange={(e) => setcreatorName(e.target.value)}
                            />
                        </Grid>

                        <Grid item style={{padding: '5px'}}>
                            <TextField
                                id="name-input"
                                name="creatorEmail"
                                label="Creator Email"
                                type="text"
                                value={creatorEmail}
                                onChange={(e) => setcreatorEmail(e.target.value)}
                            />
                        </Grid>
                    </div>
                    <Grid className='centerHorizontal'>
                        <TextField item style={{width: 350}}
                            id="location-input"
                            name="desiredLocation"
                            label="Location (If known)"
                            type="text"
                            value={formValues.desiredLocation}
                            onChange={handleInputChange}
                        />
                    </Grid>
                <div item style={{height: 20}}></div>
                    <Grid className='centerHorizontal'>
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

                <Grid className='centerHorizontal'>
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


                <Grid className='centerHorizontal'>
                    <div className='centerHorizontal'>
                        <TextField item style={{width: 350}}
                            id="emails-input"
                            name="membersEmails"
                            label="Send Invite Emails"
                            type="text"
                            value={membersEmails}
                            onChange={(e) => setmembersEmails(e.target.value)}
                        />
                    </div>
                </Grid>
                                {/*
                                    <Grid item style={{padding: '20px'}}>
                                        <div style={{ width: "400px" }}>
                                            Enter a pin for your group
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
                                */}

                <div item style={{height: 20}}></div>
                <Button variant="contained" color="primary" type="submit">
               Submit
               </Button>
            
           </Grid>
       </form>
    </div>
   </div>
)
}
