import React from 'react'
import NavBar from '../Components/NavBar'
import FlightResultCard from '../CustomUI/FlightResultCard'
import Button from '@material-ui/core/Button';


export default function Confirmation(props) {
    var response = JSON.parse(localStorage.getItem('flights'));
    console.log(response)
    return (
        <div style={{flex: 1,
            flexDirection: 'row',
            backgroundColor: 'lightgray',
            justifyContent: 'center',
            alignItems: 'center', height: '100vh'}}>

                
            <NavBar />
            <h1>Success! Your flights have been booked. Sit back and relax.</h1>
            <div style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>


            {response.map((obj, i) => {
              return (
                <div>
                    
                    <div className='group-list' style={{}} key={i}>
                        <FlightResultCard
                        personName={obj.userID} 
                        departs={obj.flight.itineraries[0].segments[0].departure.at} 
                        arrives={obj.flight.itineraries[0].segments[0].arrival.at} 
                        startAirport={obj.flight.itineraries[0].segments[0].departure.iataCode} 
                        endAirport={obj.flight.itineraries[0].segments[0].arrival.iataCode} 
                        flightPrice={obj.flight.price.total} />
                    </div>
                </div>


                
              )
            })}
            </div>
            





           
            
        </div>
        
    )
}
