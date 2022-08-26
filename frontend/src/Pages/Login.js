import React, { useState } from 'react'
import '../Components/Log&Reg.css'
import {useDispatch} from 'react-redux'
import { publicRequest } from '../RequestMethods'
import { login } from '../Redux/userRedux'
import { Link } from 'react-router-dom'


const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [token,setToken] =useState("")
  const [user,setUser] =useState("")
  const dispatch = useDispatch();

  const handleClick = async (e)=>{
    e.preventDefault()
  
    publicRequest.post("/auth/login",{username : username,password : password})
    .then((res)=>{
      setToken(res.data.accesstoken)
      setUser(res.data.username)
    })
    .catch((err)=>{
      console.log(err)
    })

    dispatch(login({
      currentuser : user,
      token : token
    }))
  }
  
   
  return (
    <div className='log-container'>
       <form className='log-form'>
        <input className='log-input' placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input className='log-input' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='log-btn' onClick={handleClick}>LOG IN</button>
        <Link to='/Register' style={{ textDecoration : 'none'}}>
         <div className='log-to-register'>create an account</div>
        </Link>
       </form>
    </div>
  )
}

export default Login