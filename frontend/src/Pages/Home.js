import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
 import Products from '../Components/Products'
 import Newsletter from '../Components/Newsletter'
 import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Products/>
      <Newsletter/>
      <Footer/>
   
    </div>
  )
}

export default Home