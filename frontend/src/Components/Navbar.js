import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import React from 'react'
import './HomeStyle.css'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  
  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <div className='navbar-left'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <span className='nav-user'>FAV</span>
          </Link>
        </div>
        <div className='navbar-center'>
          <div className='nav-searchcontainer'>
            <input className='nav-input' type='text' placeholder='search'></input>
            <Search style={{color:'grey',fontSize:18}}/>
          </div>
        </div>
        <div className='navbar-right'>
          <Link to='/Register' className='nav-menuitem' style={{ textDecoration: 'none' }}>REGISTER</Link>
          <Link to='/Login' className='nav-menuitem' style={{ textDecoration: 'none' }}>SIGN IN</Link>
          <Link to='/Cart' className='nav-menuitem' style={{ textDecoration: 'none' }}>
             <Badge badgeContent={quantity} color="primary" >
                <ShoppingCartOutlined style={{fontSize:20}}/>
             </Badge>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar