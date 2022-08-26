import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import '../Components/ProductListStyle.css'
import { useLocation } from 'react-router-dom'

const Productlist = () => {
    const location = useLocation()
    const cat = location.pathname.split("/")[2];
    const [filter,setFilter] = useState({})
    const [sort,setSort] = useState("newest")

    const handleFilters = (e) => {
          const value = e.target.value
          setFilter({
            ...filter,
            [e.target.id]:value
          })
    }

  return (
    <div className='container'>
        <Navbar/>
        <Announcement/>
        <h1 className='productlist-title'>Dresses</h1>
        <div className='filter-container'>
            <div className='filter'>
                <div className='filter-text'>Filter Products:</div>
                <select className='filter-select' id="colors" onChange={handleFilters}>
                    <option className='filter-option' disabled selected>color</option>
                    <option className='filter-option'>Black</option>
                    <option className='filter-option'>White</option>
                    <option className='filter-option'>Red</option>
                    <option className='filter-option'>Blue</option>
                    <option className='filter-option'>Green</option>
                    <option className='filter-option'>Neon</option>
                </select>
                <select className='filter-select' id="size" onChange={handleFilters}>
                    <option className='filter-option' disabled selected>Size</option>
                    <option className='filter-option'>S</option>
                    <option className='filter-option'>M</option>
                    <option className='filter-option'>L</option>
                    <option className='filter-option'>XL</option>
                    <option className='filter-option'>XS</option>
                </select>
            </div>
            <div className='filter'>
                <div className='filter-text'>Sort Products:</div>
                <select className='filter-select' onChange={e=>setSort(e.target.value)}>
                    <option className='filter-option' selected value="newest">New Arrivals</option>
                    <option className='filter-option' value="asc">Price(asc)</option>
                    <option className='filter-option' value="desc">Price(Desc)</option>
                </select>
            </div>
        </div>
        <Products cat={cat} filters={filter} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Productlist