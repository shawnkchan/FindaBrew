import { Typography } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import { Routes } from 'react-router-dom'

const addresses = {
    display:'flex', 
    justifyContent:'center',
    height:'50px'
}

function Locations({shop}) {
  return (
    <div style={{width:'40%', height:'500px', overflowY:'scroll', display:'flex', justifyContent:'center', flexDirection:'column'}}>
      <Typography variant='h5' fontWeight='bold' align='center'>Locations</Typography>
      <div style={addresses}>test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses}>test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
      <div style={addresses} >test</div>
    </div>
  )
}

export default Locations
