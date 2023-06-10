import { typography } from '@mui/system'
import React, { useEffect, useState} from 'react'
import ShopImages from '../components/ShopImages'
import ShopInformation from '../components/ShopInformation'
import {useParams} from 'react-router-dom'

function ShopPage() {
  const {id} = useParams()

  let [shop, setShop] = useState("")

  let getShop = async ()=> {
    let response = await fetch(`http://127.0.0.1:8000/api/shops/${id}`)
    let data = await response.json()
    setShop(data)
    console.log('component mounted')
  }
  

  useEffect(()=>{
    getShop()
  }, [id])


  return (
    <div style={{ display:'flex', justifyContent:'flex-start' }}>
      {console.log(id)}
      <ShopImages shop={shop} />
      <ShopInformation shop={shop} />
    </div>
  )
}

export default ShopPage
