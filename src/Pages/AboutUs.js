import React from 'react'
import FlightResultCard from '../CustomUI/FlightResultCard'

export default function AboutUs() {

    async function getData() {

        const response = await fetch('http://localhost:3001/api/getusergroups', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: "dummyUserID",
            }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
            console.log(data.data)
            alert("Group creation successful")
            window.location.href ="/individualform"
        } else {
            console.log(data.status)
            alert("Please fix the errors before continuing")
        }

    }



    return (
        <div style={{padding: '40px'}}>
            <p>Abeona is a startup venture created in Georgia Tech's CREATE-X program.</p>

            <FlightResultCard personName="Ashray Chowdhry" flightResult='Dummy Amadeus result: Delta Dec. 25th 12:00PM ATL-EWR'/>
        </div>
    )
}