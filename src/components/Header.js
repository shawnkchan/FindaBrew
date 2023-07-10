import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const header = () => {
  return (
    
    <div className='header'>
      <div id='main-name' >
        <div style={{marginTop:'80px', marginLeft:'10px'}}>
          <Typography  variant='h3' fontWeight='bold' fontFamily='Poppins' component={Link} to={'/'} style={{margin:'10px', textDecoration:'none'}} >Find a Brew</Typography>
        </div>
      </div>
      
      <div className='header-options' style={{marginTop:'90px'}}>
        <h4>Discover</h4>
        <h4>Drink List</h4>
        <h4>Favourites</h4>
        <h4>Buy</h4>
        <h4>Logout</h4>
      </div>
    </div>
    
  )
}

export default header
