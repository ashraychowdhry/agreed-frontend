
import axios from 'axios';

import React, { useState, useEffect } from 'react'


export default function FlightQueryCaller() {

  //curl -X GET 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=false&max=250' -H 'Authorization: Bearer WaQUBhIPoJpfg9CdiuWsZ8Tzj4Wz'

    const [response, setResponse] = useState('');

  useEffect(() => {
    const getData = async () => {

      const data = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ATL&destinationLocationCode=EWR&departureDate=2021-12-15&adults=1&nonStop=false&max=250",
        {
          headers: {
            'Authorization': 'Bearer WaQUBhIPoJpfg9CdiuWsZ8Tzj4Wz'
          }
        }
      );

      console.log(data)
      setResponse(data)
    };

    getData();
  }, [])

    return (
        <div>
            {JSON.stringify(response)}
        </div>
    )
}
