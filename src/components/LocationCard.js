import { CardActionArea, CardContent, Card, Typography } from '@mui/material'
import React from 'react'


function LocationCard({street, lat, lng}) {
  return (
    <div style={{margin:20}}>
      <Card>
          <CardActionArea>
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
