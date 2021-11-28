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
                        You don't have a payment method on file. Please enter payment information:
                    </Typography>

                    <TextField fullWidth label="Full Name" variant="filled" />
                <div style={{padding: 10}}></div>
                    <TextField fullWidth label="Card Number" variant="filled" />
                <div style={{padding: 10}}></div>

                    <TextField id="filled-basic" label="Expiration" variant="filled" />
                    <TextField id="filled-basic" label="CVV" variant="filled" />
                    
                </CardContent>


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