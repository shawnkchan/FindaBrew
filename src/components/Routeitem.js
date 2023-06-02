import React from 'react'
import { Link } from 'react-router-dom'

const Routeitem = ({route}) => {
  return (
    <Link to={`/route/${route.id}`} >
      <h3>{route.name}</h3>
    </Link>
  )
}

export default Routeitem
