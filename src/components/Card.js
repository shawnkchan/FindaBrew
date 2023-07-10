import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActions, CardActionArea, Typography } from '@mui/material'
import { useTheme, ThemeProvider} from '@mui/material/styles'
import Button from '@mui/material/Button'

import { grid } from '@mui/system'
import { create } from '@mui/material/styles/createTransitions'
import { Link } from 'react-router-dom'
// import imageSrc from './images/test.png'

function ShopCard({shop, width, index}) {
    const theme = useTheme();
  
    return (    
    <div style={{ margin:20}}>
        <Card sx={{ width:300, backgroundColor:theme.palette.secondary.main}}>
            <CardActionArea component={Link} to={`/shopPage/${shop.id}`}>
                <CardMedia
                style={{height:'160px'}}
                image={shop.photo_url}
                title={shop.name}
                />
                <CardContent style={{height:'130px',}}>
                    <div>
                        <Typography variant='h5'>
                        {shop.name} 
                        </Typography>

                        <Typography variant='body1'>
                            {shop.price}
                        </Typography>
                    </div>
                    <Typography variant='body1'>
                        {shop.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default ShopCard
