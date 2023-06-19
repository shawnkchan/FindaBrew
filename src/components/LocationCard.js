import { CardActionArea, CardContent, Card, Typography } from '@mui/material'
import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { Button } from '@mui/base'


function LocationCard({street, lat, lng, map,}) {
  return (
    <div style={{margin:20}}>
      <Card>
          <CardActionArea onClick={()=>map.panTo({lat: Number(lat), lng:Number(lng)})}>
              <CardContent>
                <Typography variant='h7'>{street}</Typography>
                <Typography variant='h9'>Opening Hours: </Typography>
                <Button>Directions</Button>
              </CardContent>
          </CardActionArea>
      </Card>
    </div>
  )
}

export default LocationCard
