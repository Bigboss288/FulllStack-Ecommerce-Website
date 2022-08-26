import axios from 'axios'
import { useState } from 'react'

const BASE_url  = "http://localhost:5000/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjExNjdhNjczOTA1ZTRjNzZlZjgxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDIwNDkxMiwiZXhwIjoxNjYwMzc3NzEyfQ.hq6yntkuhF2C9YEqm3wXoyG8MPBUjCBZvUWxikhKMLY"

export const publicRequest = axios.create({
    baseURL : BASE_url,
    headers : {
        "content-type" : "application/json"
      }
})


export const userRequest = axios.create({
    baseURL : BASE_url,
    header:{token:token}
})