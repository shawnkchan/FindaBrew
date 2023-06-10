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
      {shops.map((shop, index) => (
        <div>
          {console.log(shop.photo_url)}
          <Card key={index} shop={shop} />
          {/* <img src={shop.photo_url}></img> */}
        </div>
      ))}
    </div>
  )
}

export default Home
