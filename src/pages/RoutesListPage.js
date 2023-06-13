import React, {useState, useEffect} from 'react' //useState and useEffect are react hooks
//useeffect replicates lifecycle methods
import RouteItem from '../components/Routeitem'
import Card from '../components/Card'
import MyImage from '../images/test.png'
import Glyph from '../images/Glyph.avif'

const RoutesListPage = () => {
  
  let [routes, setRoutes] = useState([]) //set the initial state as an empty array (no data) 
  //useState method will return a value, 'routes'. we can access the data using 'routes'
  //setRoutes will be a method to update the values

  //useEffect takes in an arrow function, as well as a list of dependencies [] on when useEffect fires off
  //function inside useEffect will be called whenever the dependencies have changed.
  //If no dependencies have been passed, then the function gets called when the component mounts 
  //components only ever mount once, when the page is first loaded. mounting does not occur every render of the page 
  useEffect(()=> {
    getRoutes()
  }, [])

  //learn about async await and promises
  let getRoutes = async () => {
      //await forces the js script to wait for 'response' to fetch the data before executing 'data'
      let response = await fetch('/api/shops')
      let data = await response.json()
      console.log('DATA:', data)
      setRoutes(data) //the state established earlier will now be updated with the data and can be called using 'routes'
  }

  return (
    <div>
        <div className='routes-list'>
            {routes.map((route, index) => (
                <RouteItem key={index} route={route} />
            ))}
        </div>          
        
        <div>
            
        </div>
    </div>
  )
}

export default RoutesListPage
