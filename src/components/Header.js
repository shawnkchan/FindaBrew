import React from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const header = () => {
  return (
    
    <div className='header'>
      <div id='main-name' >
        <Typography variant='h4' fontWeight='bold' fontFamily='Poppins'>Find a Brew</Typography>
      </div>
      
      <div className='header-options'>
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
