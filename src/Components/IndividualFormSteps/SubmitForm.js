import React, {useContext} from 'react';
import AppContext from "./AppContext"
import './styles.css';

export default function SubmitForm() {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const details = {
        maxPrice: updateContext.maxPrice, 
        flightPreference: updateContext.airline, 
        arrivalTime: updateContext.arrival, 
        departureTime: updateContext.departure, 
        arriveOn: updateContext.arrivalDate, 
        departOn: updateContext.departureDate, 
    }
    
    const maxPrice = updateContext.maxPrice
    const flightPreference = updateContext.airline
    const arrivalTime = updateContext.arrival
    const departureTime = updateContext.departure
    const arriveOn = updateContext.arrivalDate
    const departOn = updateContext.departureDate
    const cvc = updateContext.cvc
    const expiry = updateContext.expiry
    const name = updateContext.name
    const number = updateContext.number
    const originAirport = updateContext.originAirport
    const tsaprecheck = updateContext.tsaprecheck

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(details);
        var currGroup = localStorage.getItem('currentGroup');
        var currUser = localStorage.getItem('username');

        var fetchString = ''
        if (localStorage.getItem('isLive') !== 'true') {
        fetchString = 'http://localhost:3001/api/individualform'
      } else {
        fetchString = ' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/individualform'
      }
      const response = await fetch(fetchString, {
        //const response = await fetch(' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/individualform', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
                budget: maxPrice,
                flightPreference: flightPreference,
                arrivalTime: arrivalTime,
                departureTime: departureTime,
                userID: currUser,
                groupID: currGroup,
                arrival: arriveOn,
                departure: departOn,
                card_number: number,
                expiration: expiry,
                cvv: cvc,
                cardholder_name: name,
                originAirport: originAirport,
                tsa_precheck: tsaprecheck,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			alert("You have successfully submitted your form!")
			window.location.href = "/dashboard"
		} else {
            console.log(data.status)
			alert("Please fix the errors before continuing")
		}
    };

    return (
        <div className="container">
            <p>Please click Finish to submit your form!</p>
            {/* <img className="done" src="https://www.svgrepo.com/show/13650/success.svg" alt="successful" /> */}
            <button className="doneSubmit" onClick={handleSubmit}>Finish</button>
        </div>
    );
};

