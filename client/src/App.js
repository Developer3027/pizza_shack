import React from 'react'

import Hero from './components/hero'
import Products from './components/product/index'
import { ProductData, ProductSweetData } from './components/product/data'
import Feature from './components/feature'

function App() {
  return (
    <>
      <Hero />
      <Products heading='Choose your Favorite' data={ProductData} />
      <Feature />
      <Products heading='Sweet Treats' data={ProductSweetData} />
    </>
  );
}

export default App;
