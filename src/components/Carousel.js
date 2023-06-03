import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import Card from './Card'
import MyImage from '../images/test.png'
import Glyph from '../images/Glyph.avif'
import { Button } from '@mui/base'
import { Radio } from '@mui/material'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
      if (newIndex < 0){
          newIndex = 0
      }
      else if (newIndex >= items.length){
        newIndex = items.length - 1
      }
      setActiveIndex(newIndex)
  }

  const items = [
      {
        name: 'Tiong Hoe Coffee',
        image: MyImage
      },
      {
        name: 'Glyph',
        image: Glyph
      },
      {
        name: 'TEST',
        image: Glyph
      }
  ]

  return (
    <div className='carousel' style={{ display: 'grid', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <div className='inner' style={{ transform: `translate(-${activeIndex * 100}%)`, display: 'flex'}}>
            {/* this takes the incoming json and iterates throught the map to retrieve each item */}
            {items.map((item) => {
                return <Card shop={item} width={'100%'} />;
            })}
        </div>
 
        {/* Carousel Controls  */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Button variant='text' onClick={()=>{
                updateIndex(activeIndex - 1)
            }}>
                <ArrowBackIosNewRoundedIcon />
            </Button>
            <div className='indicators'>
                {/* this creates a HTML element for every item inside the map  */}
                {items.map((item, index)=>{
                    return(
                        <Button variant='text'
                            onClick={()=>{
                                updateIndex(index);
                            }}
                        >
                            <Radio size='small'/>
                        </Button>
                    )
                })}
            </div>
            <Button variant='text' onClick={()=>{
                updateIndex(activeIndex + 1)
            }}>
                <ArrowForwardIosRoundedIcon />
            </Button>
        </div>
    </div>
  )
}

export default Carousel
