import { typography } from '@mui/system'
import React, { useEffect, useState, useRef} from 'react'
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

  const destinationRef = useRef()

  //variable to store the map we render
  const [map, setMap] = useState(/** @type google.maps.MAP */ (null))

  //Retrieve user's location
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const originRef = {lat:lat,lng:lng}

  useEffect(()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( 
            (position)=>{
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
            },
            (error)=>{
                console.error('Unable to get location', error)
            }
        )
    } else {
        console.error('Geolocation not supported in this browser')
    }
  }, [])
  

  //Store directions
  const [directionsResponse, setDirectionsResponse] = useState(null)



  return (
    <div>
      <div style={{ display:'flex', justifyContent:'flex-start',}}>
        <ShopImages shop={shop} />
        <ShopInformation shop={shop} />
      </div>
      <div style={{ display:'flex', justifyContent:'space-evenly'}}>
        <Locations 
          shop={shop} 
          map={map} 
          setMap={setMap} 
          locations={locations} 
          destinationRef={destinationRef} 
          lat={lat} 
          lng={lng}
          setDirectionsResponse={setDirectionsResponse}
          originRef={originRef}
        />
        <Map 
          map={map} 
          setMap={setMap} 
          locations={locations} 
          directionsResponse={directionsResponse}
          setDirectionsResponse={setDirectionsResponse}
          originRef={originRef}
          destinationRef={destinationRef}
        />
      </div>
    </div>
  )
}

export default ShopPage
