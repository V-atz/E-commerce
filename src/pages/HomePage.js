import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductList from '../features/product/components/ProductList'

const HomePage = () => {
  return (
    <div>
      <NavBar>
        <ProductList />
      </NavBar>
    </div>
  )
}

export default HomePage
