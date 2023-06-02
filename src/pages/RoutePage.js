import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RoutePage = () => {
  const { id } = useParams() //lets us use 'id' as a parameter in this code

  let [route, setRoute] = useState("") //variables to keep track of state, empty when intialised 

  
  useEffect(()=> { 
      let getRoute = async ()=> {
        // calls the data from this url, which is the api
        let response = await fetch("http://127.0.0.1:8000/api/route/1")
        let data = await response.json()
        console.log(data)
        setRoute(data)
      }
    getRoute()
  }, [id]) 

return (
    <div>
        <h1>Single Route {id}</h1>
        {/* adding the question mark will only load the ptag if there is a route, if not, nothing is loaded */}
        {/* quesiton mark enables null values or something like flutter */}
        <p>{route?.timestamp}</p> 
    </div>
  )
}

export default RoutePage
