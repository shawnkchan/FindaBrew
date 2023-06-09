import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActions, CardActionArea, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {purple} from '@mui/material/colors'
import { grid } from '@mui/system'
import { create } from '@mui/material/styles/createTransitions'
import { Link } from 'react-router-dom'
// import imageSrc from './images/test.png'

const theme = createTheme({
    palette: {
        primary: {
            main: '#7FA085',
        },

        secondary: {
            main: '#144329'
        }

    }
}
)



function card({shop, width}) {
  return (
    
    <div className='carousel-item' style={{ margin:100}}>
        <ThemeProvider theme={theme}>
            <Card sx={{ width:width, backgroundColor:'secondary.main'}}>
                <CardActionArea component={Link} to='/shopPage'>
                    <CardMedia
                    sx={{ height: 160,}}
                    src={shop.shop_image}
                    title={shop.name}
                    />
                    <CardContent onClick>
                        <div style={{display: 'flex', alignItems:'center'}} >
                            <Typography variant='h5' color='white' gutterBottom textOverflow='ellipsis' whiteSpace='nowrap' fontWeight='bold'>
                            {shop.name} 
                            
                            </Typography>
                            <Typography paddingLeft={7} fontSize={16} fontWeight='bold' color='primary.main'>
                                {shop.price}
                            </Typography>
                        </div>
                        <Typography fontSize={16} color='white'>
                            {shop.description}
                            
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    </div>

  )
}

export default card
