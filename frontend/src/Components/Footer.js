
import { Email, Facebook, Instagram, Phone, Pinterest, Place, Twitter } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <h1 className='footer-logo'>FAV</h1>
            <p className='footer-desc'>This is the description of the webpage</p>
            <div className='footer-socialcontainer'>
                <div className='footer-icon'>
                    <Facebook/>
                </div>
                <div className='footer-icon'>
                    <Instagram/>
                </div>
                <div className='footer-icon'>
                    <Twitter/>
                </div>
                <div className='footer-icon'>
                    <Pinterest/>
                </div>
            </div>
        </div>
        <div className='footer-center'>
            <h3 className='footer-center-title'>Useful Links</h3>
            <div className='footer-list'>
                <div className='footer-listitem'>Home</div>
                <div className='footer-listitem'>Cart</div>
                <div className='footer-listitem'>Men Fashion</div>
                <div className='footer-listitem'>Woman Fashion</div>
                <div className='footer-listitem'>Accessories</div>
                <div className='footer-listitem'>My Account</div>
                <div className='footer-listitem'>Order Tracking</div>
                <div className='footer-listitem'>Wishlist</div>
                <div className='footer-listitem'>Terms</div>
            </div>
        </div>
        <div className='footer-right'>
            <h3 className='footer-right-title'>Contact</h3>
            <div className='footer-contactitem'>
                 <Place /> 36B Thane Street,Mumbai.
            </div>
            <div className='footer-contactitem'>
                 <Phone/> +9199334873
            </div>
            <div className='footer-contactitem'>
                 <Email/> FavShopping@gmail.com
            </div>
        </div>
    </div>
  )
}

export default Footer