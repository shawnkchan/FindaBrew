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

const images = [
  TH1,TH2,TH3
]


function ShopImages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle fading in and out
  const handleFade = () => {
    console.log('clicked')
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const renderImages = () => {
    const currentImage = images[currentIndex]

    return images.map((image,index) => (
      <img 
        src={currentImage} 
        className={`image-slider ${index === currentIndex ? 'active' : ''}`}
        />
    ))
  }
  
  return (
    <div style={{ }} className='slider-container' onClick={handleFade}>
      {renderImages()}
    </div>
  )
}

export default ShopImages
