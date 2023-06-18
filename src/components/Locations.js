import { Typography } from '@mui/material'
import { height } from '@mui/system'
import {React, useState, useEffect} from 'react'
import { Routes } from 'react-router-dom'
import LocationCard from '../components/LocationCard'

function Locations({shop, map, setMap}) {
    const addresses = {
        display:'flex', 
        justifyContent:'center',
        height:'50px'
    }
    
    let [locations, setLocations] = useState([])
    
    let getLocations = async()=> {
        let response = await fetch(`http://127.0.0.1:8000/api/locations/${shop.id}`)
        let data = await response.json()
        console.log(data)
        setLocations(data)
    }
    
    useEffect(()=>{
        getLocations()
        // console.log(locations)
    }, [shop.id])

  return (
    <div style={{width:'40%', height:'100%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <Typography variant='h5' fontWeight='bold' align='center'>Locations</Typography>
      {locations.map((location, index)=>(
          <LocationCard street={location.street} map={map} lat={location.lat} lng={location.lng}/>
      ))}
    </div>
  )
}

export default Locations
