import React,  {useEffect, useState} from 'react'
import axios from 'axios';
import FlightResultCard from '../CustomUI/FlightResultCard';

export default function SearchResults() {

    const [response, setResponse] = useState('');

    useEffect(() => {
        const getData = async () => {
    
          const data = await axios.get(
            "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=false&max=250",
            {
              headers: {
                'Authorization': 'Bearer bu5rE38wnUDyEi0wJwZLh47mASNp'
              }
            }
          );
    
          
          console.log(data)
          setResponse(data)
        };
    
        //for each user in group, make call and append to responses array
        getData();
      }, [])
    

    return (
        <div>
            <FlightResultCard personName='TestUser' data={response.data.data[0]}/>
            
        </div>
    )
}

