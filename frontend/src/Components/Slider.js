
import React, { useState } from 'react'
import { sliderItems } from '../data'
import {Link} from 'react-router-dom'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'


const Slider = () => {
  
   const[slideNumber,setSlideNumber] = useState(0)

  function slideLeft(){
   //  setSlideNumber(slideNumber === 0 ? sliderItems.length-1 : slideNumber-1)
    setSlideNumber((prev) => prev === 0 ? sliderItems.length-1 : prev-1)
  }

  function slideRight(){
   setSlideNumber((prev) => prev === sliderItems.length-1 ? 0 : prev+1)
 }


  return (
    <div className='slider'>
       <div className='slider-arrow' style={{left:"10px"}} onClick={slideLeft}>
          <ArrowLeftOutlined/>
       </div>
       <div className='slider-wrapper'  style={{backgroundColor : 'sliderItems[slideNumber].bg'}}>
           <div className='slider-slide'>
               <div className='slider-imagecontainer'>
                  <img className='slider-image' src={sliderItems[slideNumber].img} alt='slider'/>
               </div>
               <div className='slider-infocontainer'>
                 <h1 className='slider-title'>{sliderItems[slideNumber].title}</h1>
                 <p className='slider-desc'>{sliderItems[slideNumber].desc}</p>
                 <button className='slider-button'>SHOP NOW</button>
             </div>
           </div>
       </div>
       <div className='slider-arrow' style={{right:"10px"}} onClick={slideRight}>
          <ArrowRightOutlined/>
       </div>
    </div>
  )
}

export default Slider