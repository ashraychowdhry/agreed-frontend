import React from 'react'
import FlightResultCard from '../CustomUI/FlightResultCard'

export default function AboutUs() {
    return (
        <div style={{padding: '40px'}}>
            <p>Abeona is a startup venture created in Georgia Tech's CREATE-X program.</p>
            <FlightResultCard personName="Ashray Chowdhry" flightResult='Dummy Amadeus result: Delta Dec. 25th 12:00PM ATL-EWR'/>
        </div>
    )
}
