import { CardActionArea, CardContent, Card, Typography } from '@mui/material'
import {React, useRef, useEffect, useState} from 'react'
import { GoogleMap, useLoadScript, MarkerF, DirectionsRenderer} from '@react-google-maps/api'
import Button from '@mui/material/Button';

function LocationCard({street, shopLat, shopLng, map, destinationRef, lat, lng, setDirectionsResponse, originRef}) {
  
  // const originRef = {lat:lat, lng:lng}

  async function calculateRoute() {
    destinationRef.current={lat:Number(shopLat) , lng:Number(shopLng)}

    if (destinationRef === '') {
      return
    }
    //eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef,
      destination: destinationRef.current,
      //eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    })
    setDirectionsResponse(results)
  }
  
  
  return (
    <div style={{margin:20,}}>
      <Card>
          <CardActionArea onClick={()=>map.panTo({lat: Number(shopLat), lng:Number(shopLng)})}>
              <CardContent>
                <Typography variant='h6'>{street}</Typography>
                <Typography variant='subtitle1'>Opening Hours: </Typography>
                
              </CardContent>
          </CardActionArea>
          <div style={{display:'flex', justifyContent:'flex-start', margin:'10px', height:'50px'}}>
            <Button
            size='small'
            variant='text'
            onClick={calculateRoute}
            >
                Directions
            </Button>
          </div>
      </Card>
    </div>
  )
}

export default LocationCard
