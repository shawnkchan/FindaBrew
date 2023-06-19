import { typography } from '@mui/system'
import React, { useEffect, useState} from 'react'
import ShopImages from '../components/ShopImages'
import ShopInformation from '../components/ShopInformation'
import Map from '../components/Map'
import {useParams} from 'react-router-dom'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Locations from '../components/Locations'


function ShopPage() {
  const {id} = useParams()

  let [shop, setShop] = useState("")

  let getShop = async ()=> {
    let response = await fetch(`http://127.0.0.1:8000/api/shops/${id}`)
    let data = await response.json()
    setShop(data)
  }

  useEffect(()=>{
    getShop()
  }, [id])

  let [locations, setLocations] = useState([])

  let getLocations = async()=> {
    let response = await fetch(`http://127.0.0.1:8000/api/locations/${shop.id}`)
    let data = await response.json()
    console.log(data)
    setLocations(data)
  }
  useEffect(()=>{
    getLocations()
  }, [shop.id])

  //variable to store the map we render
  const [map, setMap] = useState(/** @type google.maps.MAP */ (null))

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'flex-start',}}>
        <ShopImages shop={shop} />
        <ShopInformation shop={shop} />
      </div>
      <div style={{ display:'flex', justifyContent:'space-evenly'}}>
        <Locations shop={shop} map={map} setMap={setMap} locations={locations}/>
        <Map map={map} setMap={setMap} locations={locations}/>
      </div>
    </div>
  )
}

export default ShopPage
