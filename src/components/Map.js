import { CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import { GoogleMap, useLoadScript, MarkerF, DirectionsRenderer} from '@react-google-maps/api'
import Button from '@mui/material/Button';
import '../../src/App.css'

function Map({map, setMap, locations, directionsResponse, setDirectionsResponse, originRef, destinationRef}) {
    //Loads the Google Maps API script
  const { isLoaded } = useLoadScript({googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})
    
    //cache the props given to GoogleMap to avoid re-renders. This improves performance
  const containerStyle = {
    width: '100%',
    height: '600px'
  }

  const zoom = 14
  const center = {lat: 1.3524823,
    lng: 103.7670289}

  function clearDirections() {
    setDirectionsResponse(null)
    originRef=''
    destinationRef=''
    console.log(directionsResponse)
  }

  if (!isLoaded) return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
      <CircularProgress />
    </div>
    )
  return (
    <div style={{ width:'60%'}}>
      <Typography variant='h5' fontWeight='bold' align='center'>Directions</Typography> 
      <Button className='Button' variant="contained" onClick={()=>map.panTo(originRef)}>My Location</Button>
      <Button onClick={clearDirections}>Clear</Button>
      <div style={{margin:'30px'}}>
          <GoogleMap 
            zoom={zoom} 
            center={originRef} 
            mapContainerStyle={containerStyle}
            onLoad={map=>setMap(map)}
          >
          <MarkerF position={originRef}/>
          {locations.map((location)=>(
              <MarkerF position={{lat:Number(location.lat), lng:Number(location.lng)}}/>
          ))}
          {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
          </GoogleMap>
      </div>
      
    </div>
  )
}

export default Map
