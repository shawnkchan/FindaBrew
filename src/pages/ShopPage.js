import { typography } from '@mui/system'
import React from 'react'
import ShopImages from '../components/ShopImages'
import ShopInformation from '../components/ShopInformation'
import {useParams} from 'react-router-dom'

function ShopPage() {
  const {id} = useParams()

  return (
    <div style={{ display:'flex', justifyContent:'flex-start'  }}>
      {console.log(id)}
      <h1>Test {id}</h1>
      <ShopImages />
      
      <ShopInformation />
    </div>
  )
}

export default ShopPage
