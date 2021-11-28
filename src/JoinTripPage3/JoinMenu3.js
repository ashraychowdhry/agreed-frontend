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
import { padding } from '@mui/material/node_modules/@mui/system';




function Menu() {
    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: 'center'}}>
            <Card sx={{ minWidth: 400, maxWidth: 600, minHeight: 600 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" color="#9a031e">
                        Join A Trip
                    </Typography>

                    <Typography gutterBottom variant="h3" color="#9a031e">
                        --Trip Name--
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" color="#9a031e" >
                        Are you booking anyone else on your flight?
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div" color="#9a031e" >
                        Enter their information if so:
                    </Typography>

                    <TextField fullWidth label="First Name" variant="filled" />
                <div style={{padding: 10}}></div>
                    <TextField fullWidth label="Middle Name" variant="filled" />
                <div style={{padding: 10}}></div>
                    <TextField fullWidth label="Last Name" variant="filled" />
                <div style={{padding: 10}}></div>

                    <TextField id="filled-basic" label="DOB (MM/DD/YYYY" variant="filled" />
                    <TextField id="filled-basic" label="Gender" variant="filled" />
                <div style={{padding: 10}}></div>
                    <TextField id="filled-basic" label="Phone Number" variant="filled" />
                    <TextField id="filled-basic" label="Email" variant="filled" />
                    
                </CardContent>

            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="Carry-On Only"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="1 Checked Bag"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="2+ Checked Bags"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>

                <CardActions>
                        <Button size="large" color="primary" >
                            BACK
                        </Button>

                        <Button size="large" color="primary" >
                            CONTINUE
                        </Button>
                </CardActions>
            </Card>
        </div>
      );
}

export default Menu