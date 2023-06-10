import { Typography } from '@mui/material'
import React from 'react'
import { createTheme } from '@mui/system'

function ShopInformation({shop}) {
  const theme = createTheme({
    typography: {
      h3: {
        color: 'red',

      }
    }
  })

  return (
    <div style={{width:'50%'}}>
      <Typography variant="h4" align='left' fontWeight='bold'>{shop.name}</Typography>
      <br></br>
      <Typography variant="h6">XXX reviews</Typography>
      <Typography variant='h5' fontWeight='bold'>About</Typography>
      <Typography variant='h7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
      <Typography variant='h5' fontWeight='bold'>Known For</Typography>
      <Typography variant='h7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
      <Typography variant='h5' fontWeight='bold'>Locations</Typography>
      

    </div>
  )
}

export default ShopInformation
