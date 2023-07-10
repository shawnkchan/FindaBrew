import {React, useState, useEffect} from 'react'
import ShopCard from '../components/Card'
import MyImage from '../images/test.png'
import Glyph from '../images/Glyph.avif'
import Carousel from '../components/Carousel'
import { Typography } from '@mui/material'
import { Routes } from 'react-router-dom'
import Button from '@mui/material/Button';
import { length } from 'globalthis/implementation'
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

  const [index, setIndex] = useState(0); 
  const length = shops.length

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div style={{margin:30}}>
      <Typography variant='h4'>Trending Cafes</Typography>
      <div style={{display:'flex', overflowX:'auto'}}>
        {shops.map((shop, index) => (
            <ShopCard key={index} shop={shop} />
        ))}
      </div>
    </div>
  )
}

export default Home
