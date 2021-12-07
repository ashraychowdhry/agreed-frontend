import React, { useContext } from 'react';
import AppContext from "./AppContext"
import Button from '@material-ui/core/Button';
import './styles.css';


export default function Form1() {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;
    
    async function GetGroupData() {
        const currentGroup = localStorage.getItem("currentGroup")

        var fetchString = ''
        if (localStorage.getItem('isLive') !== 'true') {
          fetchString = 'http://localhost:3001/api/getgroupdata'
        } else {
          fetchString = ' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/getgroupdata'
        }
        const response = await fetch(fetchString, {
		//const response = await fetch(' https://cors-everywhere.herokuapp.com/http://ec2-35-171-158-190.compute-1.amazonaws.com:3001/api/getgroupdata', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				currentGroup,
			}),
		})

		const data = await response.json()
        // console.log(data)

		if (data) {
            updateContext.setEarliestDate(data.group[0].earliestDate)
            console.log(data.group[0].earliestDate)
            updateContext.setLatestDate(data.group[0].latestDate)
		} else {
			alert("Error, something went wrong")
		}
	}

    const next = () => {
        if (updateContext.airline === '') {
            console.log('Please enter your flight preference')
        } else if (updateContext.maxPrice === '') {
            console.log('Please enter your budget')
        } else {
            GetGroupData();
            console.log(updateContext.earliest)
            updateContext.setStep(updateContext.currentPage + 1)
        }
    };

    return (

        <div className="contain">
            <p>Enter Your Details</p>
            <form className="form">
                    <div> 
                    <input className="formInput" type="text" placeholder="Airline Preference" onChange={e => updateContext.setFlightPreference(e.target.value)} required/>
                    </div>
                    <div> 
                    <input className="formInput" type="text" placeholder="Budget for Flight" onChange={e => updateContext.setBudget(e.target.value)} required/>
                    </div>
                    <div> 
                    <input className="formInput" type="text" placeholder="Origin Airport" onChange={e => updateContext.setOriginAirport(e.target.value)} required/>
                    </div>
                    <div> 
                    <Button type="button" variant ="contained" className="formSubmit" color ="primary" onClick={next} >Next</Button>
                    </div>
            </form>
        </div>
    );
};
