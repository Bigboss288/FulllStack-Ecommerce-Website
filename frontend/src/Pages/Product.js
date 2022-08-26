import { Add,Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import '../Components/ProductListStyle.css'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../RequestMethods'

const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product,setProduct] = useState({})

    useEffect(() => {
        const getProduct = async () =>{
            try{
                const res = await publicRequest.get("/product/find/"+id)
                setProduct(res.data)
            }
            catch{}
        }

        getProduct()
    }, [id])
  return (
    <div className='product-container'>
        <Navbar/>
        <Announcement/>
        <div className='product-wrapper'>
            <div className='product-imgcontainer'>
                <img className='product-img' src={product.img}/>
            </div>
            <div className='product-infocontainer'>
                <h1 className='product-title'>{product.title}</h1>
                <p className='product-desc'>{product.desc}</p>
                <span className='product-price'>Rs {product.price}</span>
                <div className='product-filter-container'>
                    <div className='product-filtercontainer'>
                        <div className='product-filter'>
                             <span className='product-filter-title'>Color</span>
                             {/* {product.color.map((c) => {
                                <div className='product-filter-color' style={{backgroundColor : c }}></div>
                             })} */}
                             <div className='product-filter-color' style={{backgroundColor : "blue" }}></div>
                             <div className='product-filter-color' style={{backgroundColor : "black" }}></div>
                             <div className='product-filter-color' style={{backgroundColor : "red" }}></div>
                         </div>
                         <div className='product-amntcontainer'>
                             <Remove/>
                             <div className='product-amount'>1</div>
                             <Add/>
                         </div>
                         <div className='product-filter'>
                             <span className='product-filter-title'>Size</span>
                             <select className='product-filter-size'>
                                 <option className='product-filter-size'>S</option>
                                 <option className='product-filter-size'>M</option>
                                 <option className='product-filter-size'>L</option>
                                 <option className='product-filter-size'>XL</option>
                             </select> 
                         </div>
                    </div>
                    <div className='product-addcontainer'>
                    <button className='product-addcart'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Product