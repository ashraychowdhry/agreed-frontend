import React from 'react';
import './JoinMenu.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';




function Menu() {
    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: 'center'}}>
            <Card sx={{ maxWidth: 1000 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" color="#9a031e">
                        Join A Trip
                    </Typography>

                    <Typography gutterBottom variant="h3" color="#9a031e">
                        Trip Name!
                    </Typography>

                    <TextField fullWidth label="Where are you departing from?" variant="filled" />


                    <Typography gutterBottom variant="h5" component="div" color="#9a031e" >
                        Select your per-seat budget for flights:
                    </Typography>

                    <TextField id="filled-basic" label="$ Min" variant="filled" />
                    <TextField id="filled-basic" label="$ Max" variant="filled" />

                    <Typography gutterBottom variant="h5" component="div" color="#9a031e">
                        Select the dates of your flgihts:
                    </Typography>

                    <TextField id="filled-basic" label="MM/DD/YYYY" variant="filled" />
                    <TextField id="filled-basic" label="MM/DD/YYYY" variant="filled" />

                    <div >
                        <Typography gutterBottom variant="h7" component="div" color="black">
                            Departure
                        </Typography>
                        <Typography gutterBottom variant="h7" component="div" color="black" align="right">
                            Return
                        </Typography>
                    </div>
                    
                </CardContent>

            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Morning"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Afternoon"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Evening"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>

                <CardActions>
                        <Button size="large" color="primary" >
                            CONTINUE
                        </Button>
                </CardActions>
            </Card>
        </div>
      );
}

export default Menu