import {Button, TextField, Typography } from '@mui/material'
import React from 'react'


function LogIn() {
  return (
    <div>
        <div style={{display:'flex', justifyContent:'center', width:'400px',alignItems:'center',flexDirection:'column', padding:'40px'}}>
            <TextField style={{padding:'20px', }} label='username' autoFocus fullWidth>Username</TextField>
            <TextField style={{ width:'300px', padding:'20px'}} label='Password' fullWidth>Password</TextField>
            <Button style={{ width:'300px', padding:'20px'}}>Log In</Button>
        </div>
    </div>
  )
}

export default LogIn
