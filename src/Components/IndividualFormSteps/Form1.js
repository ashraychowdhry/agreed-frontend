import React, { useContext } from 'react';
import AppContext from "./AppContext"
import Button from '@material-ui/core/Button';
import './styles.css';

export default function Form1() {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.airline === '') {
            console.log('Please enter your flight preference')
        } else if (updateContext.maxPrice === '') {
            console.log('Please enter your budget')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (

        <div className="contain">
            <p>Enter Your Details</p>
            <form className="form">
                <div class="grid-container"> 
                <input className="formInput" type="text" placeholder="Airline Preference" onChange={e => updateContext.setFlightPreference(e.target.value)} required/>
                </div>
                <div class="grid-container"> 
                <input className="formInput" type="text" placeholder="Budget for Flight" onChange={e => updateContext.setBudget(e.target.value)} required/>
                </div>
                <div class="grid-container"> 
                <Button type="button" variant ="contained" className="formSubmit" color ="primary" onClick={next} >Next</Button>
                </div>
            </form>
        </div>
    );
};
