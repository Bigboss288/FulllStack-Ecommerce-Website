import React from 'react'
import { FavoriteBorder,ShoppingCartOutlined } from '@material-ui/icons'
import {Link} from "react-router-dom"

const Productitem = ({item}) => {
  return (
    <div className='productitem-container'>
        <div className='productitem-circle'></div>
        <img className='productitem-image' src={item.img} alt="nice"/>
        <Link to={`/Product/${item._id}`}>
        <div className='productitem-info'>     
            <div className='productitem-icon'>
                <ShoppingCartOutlined style={{fontSize:20}}/>
            </div>
           
            <div className='productitem-icon'>
                <FavoriteBorder/>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Productitem