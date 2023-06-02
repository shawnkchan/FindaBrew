import React from 'react'
import Card from '../components/Card'
import MyImage from '../images/test.png'
import Glyph from '../images/Glyph.avif'
import { Typography } from '@mui/material'

function Home() {
  return (
    <div>
      <Typography variant='h4'>Trending Cafes</Typography>
      {/* make this dynamic */}
      <Card shop={{ name: 'Tiong Hoe Coffee', image: MyImage, price:'$$$' }}/>
      <Card shop={{ name: 'Glyph', image: Glyph, price:'$$$$'}}/>
      <Card shop={{ name: 'Tiong Hoe Coffee', image: MyImage, price:'$$$' }}/>
    </div>
  )
}

export default Home
