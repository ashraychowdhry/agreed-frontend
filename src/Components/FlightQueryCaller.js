
import axios from 'axios';

import React, { useState, useEffect } from 'react'


export default function FlightQueryCaller() {

  //curl -X GET 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=false&max=250' -H 'Authorization: Bearer WaQUBhIPoJpfg9CdiuWsZ8Tzj4Wz'

    const [response, setResponse] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {

      const data = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=false&max=250",
        {
          headers: {
            'Authorization': 'Bearer rIGBmIj1hjwIMugoGeGaySAPTJxl'
          }
        }
      );

      console.log(data)
      setResponse(data)
      setIsLoaded(true)
    };

    getData();
  }, [])

  function loadData() {
    if (isLoaded == true) {
      return (JSON.stringify(response.data.data[0]))
    } else {
      return (JSON.stringify(response))
    }
  }

    return (
        <div>
            {
              loadData()
            }
        </div>
    )
}
