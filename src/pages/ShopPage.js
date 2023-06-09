import React from 'react'
import ShopImages from '../components/ShopImages'
import ShopInformation from '../components/ShopInformation'




function ShopPage() {
  return (
    <div style={{ display:'flex', justifyContent:'flex-start'  }}>
      
      <ShopImages />
      
      <ShopInformation />
    </div>
  )
}

export default ShopPage
