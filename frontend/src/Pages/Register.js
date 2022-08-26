import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import '../Components/Log&Reg.css'
import { publicRequest } from '../RequestMethods'

const Register = () => {

  const[firstname,setFirstname] = useState("")
  const[lastname,setlastname] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[cpassword,setCpassword] = useState("")

  const navigate = useNavigate()

  const handleClick = (e) =>{
    e.preventDefault()

    const register = {
      firstname : firstname,
      lastname : lastname,
      email : email,
      password : password,
      confirmPassword : cpassword
    }
    
    publicRequest.post("/auth/register", register)
    .then((res)=>{
       navigate("/Login")
       console.log("user Registered")
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  return (
    <div className='reg-container' >
      <div className='reg-wrapper'>
        <div className='reg-title'>Registration Form</div>
        <form className='reg-form'>

          <div className='reg-name-input'>
            <input className='reg-input-1'
                 placeholder='FirstName' 
                 value={firstname} 
                 onChange={(e) => setFirstname(e.target.value)}>
            </input>
            <input className='reg-input-1'
                 placeholder='LastName' 
                 value={lastname} 
                 onChange={(e) => setlastname(e.target.value)}>
            </input>
          </div>

          <div>
            <input className='reg-input'
              placeholder='Email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>

          <div>
            <input className='reg-input'
               placeholder='Password'
               value={password} 
               onChange={(e) => setPassword(e.target.value)}>
            </input>
          </div>

          <div>
            <input className='reg-input'
               placeholder='Confirm Password'
               value={cpassword} 
               onChange={(e) => setCpassword(e.target.value)}>
            </input>
          </div>
          
          <button className='reg-btn' onClick={handleClick}>REGISTER</button>
        </form>
      </div>
    </div>
  )
}

export default Register