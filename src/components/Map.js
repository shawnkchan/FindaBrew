import { CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function Map({map, setMap}) {
    //Loads the Google Maps API script
  const { isLoaded} = useLoadScript({googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})
    
    //cache the props given to GoogleMap to avoid re-renders. This improves performance
  const containerStyle = {
    width: '100%',
    height: '600px'
  }

  const zoom = 14
  
  //variables to store user's current location
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const center = {lat: 1.3524823,
    lng: 103.7670289}

  useEffect(()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( 
            (position)=>{
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
            },
            (error)=>{
                console.error('Unable to get location', error)
            }
        )
    } else {
        console.error('Geolocation not supported in this browser')
    }
  }, [])

  if (!isLoaded) return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
      <CircularProgress />
    </div>
    )
  return (
    <div style={{ width:'60%'}}>
      <Typography variant='h5' fontWeight='bold' align='center'>Directions</Typography>
      <div style={{margin:'30px'}}>
          <GoogleMap 
            zoom={zoom} 
            center={{lat,lng}} 
            mapContainerStyle={containerStyle}
            onLoad={map=>setMap(map)}
          >
          <Marker position={{lat:lat, lng:lng}}/>
          </GoogleMap>
          {console.log(center.lat)}
      </div>
      
    </div>
  )
}

export default Map
