
import axios from 'axios';

import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import FlightResultCard from '../CustomUI/FlightResultCard';


export default function FlightQueryCaller() {

  //curl -X GET 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=false&max=250' -H 'Authorization: Bearer WaQUBhIPoJpfg9CdiuWsZ8Tzj4Wz'

    const [response, setResponse] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    let { slug } = useParams();

    localStorage.setItem('currentGroup', slug);

    var groupID = localStorage.getItem('currentGroup');

    

  useEffect(() => {
    const getData = async () => {



      const groupUsers = await fetch('http://localhost:3001/api/getgroupusersforms', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				groupID: groupID,
			}),
		})

		const data1 = await groupUsers.json()

		if(data1.status === 'ok') {
			console.log(data1)
			console.log('Successfully Queried Group Members from group ' + groupID)
		} else {
			console.log(data1)
			alert('Please enter the right pin')
    }

      const groupData = await fetch('http://localhost:3001/api/getgroup', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          groupID: groupID,
        }),
      })

      const groupVals = await groupData.json()

      if(data1.status === 'ok') {
        console.log(groupVals)
        console.log('Successfully found destination from ' + groupID)
      } else {
        console.log(groupVals)
        alert('Please enter the right pin')
      }

      var destination = groupVals.group[0].desiredLocation;
		console.log(groupVals.group)

    var userResults = []

    console.log(data1.userforms.length)
    console.log(data1.userforms[0].originAirport)
    for(var i = 0; i < data1.userforms.length; i++) {
      //"https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=false&max=250"
      //https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=true&max=300&currency=USD
      //https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=true&max=300


      //https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=true&currencyCode=USD&maxPrice=500&max=1
      var query = "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" + data1.userforms[i].originAirport + "&destinationLocationCode=" + destination + "&departureDate=" + data1.userforms[i].departure + "&adults=1&nonStop=true&currencyCode=USD&maxPrice=" + data1.userforms[i].budget + "&max=1" 
      const data = await axios.get(
        query,
        {
          headers: {
            'Authorization': 'Bearer QxGBZwGq4En5DlHSjFLoSNOTMQ0i'
          }
        }
      );
      var obj = {
        userID: data1.userforms[i].userId,
        flight: data.data.data[0]
      }
      userResults.push(obj)

    }

      console.log(userResults)
      setResponse(userResults)
      setIsLoaded(true)
    };



    
    getData();
  }, [])

  function loadData() {
    if (isLoaded == true) {
      return (JSON.stringify(response))
    } else {
      return (JSON.stringify(response))
    }
  }

    return (
        <div>
            {/*
              loadData()
            */}
            <div>

            {response.map((obj, i) => {
              return (
                <div>

                  <div className='group-list' key={i}>
                    <FlightResultCard 
                      personName={obj.userID} 
                      departs={obj.flight.itineraries[0].segments[0].arrival.at} 
                      arrives={obj.flight.itineraries[0].segments[0].departure.at} 
                      startAirport={obj.flight.itineraries[0].segments[0].arrival.iataCode} 
                      endAirport={obj.flight.itineraries[0].segments[0].departure.iataCode} 
                      flightPrice={obj.flight.price.total} />
                  </div>
                </div>
              )
            })}


            <Button variant="contained" color="primary" href={'/booknow'}>Book Now</Button>
            </div>
        </div>
    )
}
