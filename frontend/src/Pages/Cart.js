
import { Add, Remove } from '@material-ui/icons'
import React, { useState } from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../Components/ProductListStyle.css'

const Cart = () => {
  const [count1,setCount1] = useState(1)
  const [count2,setCount2] = useState(1)
  let sum1,sum2
  return (
    <div className='cart-container'>
        <Navbar/>
        <Announcement/>
        <div className='cart-wrapper'>
            <h1 className='cart-title'>YOUR BAG</h1>
            <div className='cart-top'>
                <button className='cart-topbtn'>CONTINUE SHOPPING</button>
                <div className='cart-toptext'>
                    <span className='toptext'>Shopping Bag</span>
                    <span className='toptext'>Wishlist</span>
                </div>
                <button className='cart-topbtn' >CHECKOUT NOW</button>
            </div>
            <div className='cart-bottom'>
                <div className='cart-productinfo'>
                    <div className='cart-product'>
                        <div className='cart-productdetails'>
                            <img className='cart-productimg' src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A'/>
                            <div className='cart-product-details'>
                                <span className='cart-productname'><b>JESSIE THUNDER SHOES</b></span>
                                <span className='cart-productid'>9964626</span>
                                <div className='cart-productcolor'></div>
                                <span className='cart-productsize'><b>Size:</b> 33</span>
                            </div>
                        </div>
                        <div className='cart-pricedetails'>
                            <div className='cart-productamnt'>
                                <Remove onClick={()=>setCount1(count1>1?count1-1:count1)}/>
                                <div className='cart-amnt'>{count1}</div>
                                <Add onClick={()=>setCount1(count1+1)}/>
                            </div>
                            {sum1=count1*1200}
                            <div className='cart-productprice'>Rs {sum1}</div>
                        </div>
                    </div>
                    
                    <hr className='line'/>

                    <div className='cart-product'>
                        <div className='cart-productdetails'>
                            <img className='cart-productimg' src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png'/>
                            <div className='cart-product-details'>
                                <span className='cart-productname'><b>HAKURA T_SHIRT</b></span>
                                <span className='cart-productid'>9963376</span>
                                <div className='cart-productcolor'></div>
                                <span className='cart-productsize'><b>Size:</b> M</span>
                            </div>
                        </div>
                        <div className='cart-pricedetails'>
                            <div className='cart-productamnt'>
                                <Remove onClick={()=>setCount2(count2>1?count2-1:count2)}/>
                                <div className='cart-amnt'>{count2}</div>
                                <Add onClick={()=>setCount2(count2+1)}/>
                            </div>
                            {sum2=500*count2}
                            <div className='cart-productprice'>Rs {sum2}</div>
                        </div>
                    </div>
                </div>
                <div className='cart-summary'>
                    <h3 className='cart-summarytitle'>ORDER SUMMARY</h3>
                    <div className='cart-summaryitem'>
                        <span className='cart-summaryitemtext'>SUBTOTAL</span>
                        <span className='cart-summaryitemprice'>Rs {sum1+sum2}</span>
                    </div>
                    <div className='cart-summaryitem'>
                        <span className='cart-summaryitemtext'>SHIPPING CHARGE</span>
                        <span className='cart-summaryitemprice'>Rs 100</span>
                    </div>
                    <div className='cart-summaryitem'>
                        <span className='cart-summaryitemtext'>DISCOUNT</span>
                        <span className='cart-summaryitemprice'>Rs 200</span>
                    </div>
                    <div className='cart-summaryitem'>
                        <span className='cart-summaryitemtext'><b>Total</b></span>
                        <span className='cart-summaryitemprice'>Rs {sum1+sum2-100}</span>
                    </div>
                    <button className='cart-summarybtn'>CHECK OUT</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart