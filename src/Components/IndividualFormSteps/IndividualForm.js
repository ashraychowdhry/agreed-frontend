import React, {useState} from 'react';
import './styles.css'
import AppContext from "./AppContext"
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import SubmitForm from './SubmitForm'
import Progress from './Progress'
import NavBar from '../NavBar.js';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import TF from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Content } from 'react-bootstrap/lib/Tab';


export default function IndividualForm() {
    const [step, setStep] = useState(0);
    const [budget, setBudget] = useState('')
    const [arrivalTime, setArrivalTime] = useState('')
    const [departureTime, setDepartureTime] = useState('')
    const [flightPreference, setFlightPreference] = useState('')
    const [arriveOn, setArrivalDate] = useState('')
    const [departOn, setDepartureDate] = useState('')

    const userDetails = {
        currentPage: step,
        maxPrice: budget,
        airline: flightPreference,
        arrival: arrivalTime,
        departure: departureTime,
        arrivalDate: arriveOn,
        departureDate: departOn,
        setBudget,
        setFlightPreference,
        setArrivalTime,
        setDepartureTime,
        setStep,
        setArrivalDate,
        setDepartureDate,
    };
    
    return (
        <AppContext.Provider value={{userDetails}}>
            <div class ="blueBG">      
            <NavBar/>
        
            <br/>
                <div class="individualFormCard"> 
                        <h3 class="redText" >Multi Step Individual Form</h3>
                        <div style={{paddingTop: '25px', paddingLeft: '150px'}}>
                            <Progress />
                            {step === 0 && <Form1 /> } 
                            {step === 1 && <Form2 /> }
                            {step === 2 && <Form3 /> }
                            {step === 3 && <SubmitForm /> }
                        </div>
                        
                            

                            
                        
                    
                </div>
            </div>
            
        </AppContext.Provider>
    );
};