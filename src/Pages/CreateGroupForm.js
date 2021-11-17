import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

const defaultValues = {
    name: "",
    age: 0,
    sex: "",
    os: "",
    favoriteNumber: 0,
  };



export default function CreateGroupForm() {
    const [formValues, setFormValues] = useState(defaultValues)

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

        const response = await fetch('http://localhost:3001/api/creategroup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...formValues,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem("token", data.user)
			alert("Login successful")
			window.location.href = "/dashboard"
		} else {
			alert("Please check your username and password")
		}

        //console.log(formValues);
      };

    return (
        <div style={{padding: '40px'}}>
            <h1>Create Group Form</h1>

            <form onSubmit={handleSubmit}>
                <Grid container alignItems="left" justify="left" direction="column">
                    <Grid item>
                    <TextField
                        id="name-input"
                        name="name"
                        label="Name"
                        type="text"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                    </Grid>
                    <Grid item>
                    <TextField
                        id="age-input"
                        name="age"
                        label="Age"
                        type="number"
                        value={formValues.age}
                        onChange={handleInputChange}
                    />
                    </Grid>
                    <Grid item>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                        name="gender"
                        value={formValues.gender}
                        onChange={handleInputChange}
                        row
                        >
                        <FormControlLabel
                            key="male"
                            value="male"
                            control={<Radio size="small" />}
                            label="Male"
                        />
                        <FormControlLabel
                            key="female"
                            value="female"
                            control={<Radio size="small" />}
                            label="Female"
                        />
                        <FormControlLabel
                            key="other"
                            value="other"
                            control={<Radio size="small" />}
                            label="Other"
                        />
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl>
                        <Select
                        name="os"
                        value={formValues.os}
                        onChange={handleInputChange}
                        >
                        <MenuItem key="mac" value="mac">
                            Mac
                        </MenuItem>
                        <MenuItem key="windows" value="windows">
                            Windows
                        </MenuItem>
                        <MenuItem key="linux " value="linux">
                            Linux
                        </MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <div style={{ width: "400px" }}>
                        Favorite Number
                        <Slider
                        value={formValues.favoriteNumber}
                        onChange={handleSliderChange("favoriteNumber")}
                        defaultValue={1}
                        step={1}
                        min={1}
                        max={3}
                        marks={[
                            {
                            value: 1,
                            label: "1",
                            },
                            {
                            value: 2,
                            label: "2",
                            },
                            {
                            value: 3,
                            label: "3",
                            },
                        ]}
                        valueLabelDisplay="off"
                        />
                    </div>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                    Submit
                    </Button>
                </Grid>
            </form>

            

        </div>
    )
}
