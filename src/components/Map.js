import { Typography } from '@mui/material'
import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

function Map() {
  const { isLoaded} = useLoadScript({googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY})

  if (!isLoaded) return (<div>Loading...</div>)
  return (
    <div>
      <Typography variant='h5' fontWeight='bold' align='center'>Directions</Typography>
      <div style={{margin:'30px'}}>
          <GoogleMap zoom={10} center={{lat:44, lng: -80}} mapContainerClassName='map-container'></GoogleMap>
      </div>
    </div>
  )
}

export default Map
