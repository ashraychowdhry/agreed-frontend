import React, {useContext} from 'react';
import AppContext from './AppContext';
import Button from '@material-ui/core/Button';
import './styles.css';

export default function Form3() {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.arrival === null) {
            console.log('Please enter your arrival time')
        } else if (updateContext.departure === null) {
            console.log('Please enter your departure time')
        } else {
            console.log(updateContext)
            updateContext.setStep(updateContext.currentPage + 1)
        }
    };

    return (
        <div className="container">
            <p>Enter your vehicle details</p>
            <div className="formContainer">
                <form className="form">
                    <label>
                    <select className="formSelect" onChange={e => updateContext.setArrivalTime(e.target.value)} >
                        <option >When do you want to arrive?</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Night">Night</option>
                    </select>
                    </label>
                    <label>
                    <select className="formSelect" onChange={e => updateContext.setDepartureTime(e.target.value)} >
                        <option>When do you want to leave?</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Night">Night</option>
                    </select>
                    </label>
                    <button className="multipleButton" value="Previous" type="button" onClick={() => updateContext.setStep(updateContext.currentPage - 1)}>Previous </button>
                    <Button type="button" className="formSubmit" variant ="contained" color ="primary" onClick={next}>Next </Button>
                </form>
            </div>
        </div>
    );
};