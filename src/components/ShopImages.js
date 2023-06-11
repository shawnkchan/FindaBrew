import React from 'react'
import MyImage from '../images/test.png'
import Glyph from '../images/Glyph.avif'
import TH1 from '../images/th1.jpeg'
import TH2 from '../images/th2.jpeg'
import TH3 from '../images/th3.webp'
import { width } from '@mui/system'
import { ImageList } from '@mui/material'
import '../App.css';
import {useState, useEffect} from 'react'


function ShopImages({shop}) {
  
  return (
    <div style={{ width:'50%', padding:'20px'}}>
      <img src={shop.photo_url} style={{width:'100%'}}></img>
    </div>
  )
}

export default ShopImages
