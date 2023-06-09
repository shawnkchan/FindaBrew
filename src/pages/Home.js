import {React, useState, useEffect} from 'react'
import Card from '../components/Card'
import MyImage from '../images/test.png'
import Glyph from '../images/Glyph.avif'
import Carousel from '../components/Carousel'
import { Typography } from '@mui/material'
import { Routes } from 'react-router-dom'
// import Carousel from '../components/Carousel'


function Home() {

  let [shops, setShops] = useState([])

  useEffect(()=> {
      getShops()
  }, []
  )

  let getShops = async()=>{
      let response = await fetch('/api/shops')
      let data = await response.json()
      setShops(data)
  }


  return (
    <div style={{ }}>
      <Typography variant='h4'>Trending Cafes</Typography>
      {/* make this dynamic */}
      {/* <Carousel /> */}
      {shops.map((shop, index) => (
        <Card key={index} shop={shop} />
      
      ))}
    </div>
  )
}

export default Home
