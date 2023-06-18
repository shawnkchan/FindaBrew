import { CardActionArea, CardContent, Card, Typography } from '@mui/material'
import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'


function LocationCard({street, lat, lng, map,}) {
  return (
    
    <div style={{margin:20}}>
      {console.log(typeof(lat))}
      <Card>
          <CardActionArea onClick={()=>map.panTo({lat: Number(lat), lng:Number(lng)})}>
              <CardContent>
                <Typography variant='h7'>{street}</Typography>
                <Typography variant='h9'>Opening Hours: </Typography>
              </CardContent>
          </CardActionArea>
      </Card>
    </div>
  )
}

export default LocationCard
