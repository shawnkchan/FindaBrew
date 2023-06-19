import { Typography } from '@mui/material'
import { height } from '@mui/system'
import {React, useState, useEffect} from 'react'
import { Routes } from 'react-router-dom'
import LocationCard from '../components/LocationCard'

function Locations({shop, map, setMap, locations}) {
    const addresses = {
        display:'flex', 
        justifyContent:'center',
        height:'50px'
    }

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
