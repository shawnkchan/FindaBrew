import { Typography, Button } from '@mui/material'
import React from 'react'
import { createTheme } from '@mui/system'
// import Button from '@mui/material-next/Button'

function ShopInformation({shop}) {
  const theme = createTheme({
    typography: {
      h3: {
        color: 'red',

      }
    }
  })

  return (
    <div style={{width:'50%', padding:'20px'}}>
      <Typography variant="h4" align='left' fontWeight='bold'>{shop.name}</Typography>
      <div style={{ display:'flex', justifyContent:'flex-start'}}>
        <Typography variant="h6">XXX reviews</Typography>
        <a href={shop.instagram} target="_blank">
          <Button>Instagram</Button>
        </a>
        <Button>Favourite</Button>
        {
          shop.website != null &&
          <a href={shop.website} target="_blank">
            <Button>Website</Button>
          </a>
        }
      </div>
      <Typography variant='h5' fontWeight='bold' >About</Typography>
      <Typography variant='body3'>
        {shop.description}
      </Typography>
      <Typography variant='h5' fontWeight='bold'>Known For</Typography>
      <Typography variant='body3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
      
      

    </div>
  )
}

export default ShopInformation
