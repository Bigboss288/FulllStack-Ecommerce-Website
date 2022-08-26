
import React, { useEffect, useState } from 'react'
import { publicRequest } from '../RequestMethods'
import Productitem from './Productitem'

const Products = () => {
  // cat,filters,sort
   const [products, setProducts] = useState([])
  // const [filterProduct,setFilterProduct] = useState([])

  useEffect(()=>{
      const getProducts = async ()=>{
        try{
            const res = await publicRequest.get("/product/findall")
            setProducts(res.data)
        }
        catch{}
      }

      getProducts()
  })

  // console.log(cat,filters,sort)
  return (
    <div className='products-container'>
        {
            products.map(item=>(
                <Productitem item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Products