import React, {useEffect} from 'react'
import NavBar from '../Components/NavBar'
import FlightResultCard from '../CustomUI/FlightResultCard'
import Button from '@material-ui/core/Button';
import './confirmation.css'
import './landing.css'


export default function Confirmation(props) {

    var response = JSON.parse(localStorage.getItem('flights'));
    console.log(response)

    /*
    const stripe = require('stripe')('sk_test_51K3nn4J2zi5U0DU2mqpFZQFvCOa36kwqbVTMfSIFg4JKGgwaGJdvczJtKCWLetLEaAzNgEUdWgf1JpwaXkN16bov001WPu25Kz');



    async function handleClick() {
        const charge = await fetch(' https://api.stripe.com/v1/charges', {
            method: "POST",
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer sk_test_51K3nn4J2zi5U0DU2mqpFZQFvCOa36kwqbVTMfSIFg4JKGgwaGJdvczJtKCWLetLEaAzNgEUdWgf1JpwaXkN16bov001WPu25Kz',

            },
            body: JSON.stringify({
              amount: 100,
              source: 'tok_mastercard',
              currency: 'usd',
              description: 'flight booked for'
            }),
          })

          const data = await charge.json()

          if(data.object === 'charge') {
            console.log(data)
            console.log('Successfully booked and charged flight for ')
          } else {
              console.log(data)
            alert('Error paying for flights')
          }
    }

    useEffect(() => {
		handleClick().then(console.log("SUCCESS"))
	}, [])

*/
    return (
        <div className='confirmbackground'>
            <div className='confirm'>
                <NavBar/>
                <div style={{margin: '20px'}}>
                    <h1 className='title'>Success! Your flights have been booked. Sit back and relax.</h1>
                </div>
                
                <div style={{position: 'absolute', left: '50%', top: '60%', transform: 'translate(-50%, -50%)'}}>
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
        </div>

    )
}
