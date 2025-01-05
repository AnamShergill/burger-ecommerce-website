import React from 'react'

import Carousel from './components/Carousel'
import Progressor from './components/Progressor'
import ProductList1 from './components/ProductList1'
import Banner from './components/Banner'
import Footer from './components/Footer'
import ProductList2 from './components/ProductList2'

import Menu from './components/MenuItems'
import HeroSection from './components/Header'

export default function App() {
  return (
    <div className='bg-gradient-to-r from-red-950 to-black min-h-screen'>
      <HeroSection/>
      <Carousel/>
      <Progressor/>
      <Banner/>
      <ProductList1/>
      <ProductList2/>
      <Menu/>
      <Footer/>
      
    </div>
  )
}
