import React, {  } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomerLogin from 'C:/Users/ayush/Documents/Amazon Cart/cart-ui/src/pages/login/CustomerLogin.js'
import CusCheckout from './CusCheckout'
import { Navigate } from 'react-router-dom'


export default function Checkout() {
  const navigate = useNavigate()
  return (
    <div>
      {JSON.parse(localStorage.getItem('loginBoolCus'))? null:<CustomerLogin/>}
      <br></br>
      {JSON.parse(localStorage.getItem('loginBoolCus'))? null:<button onClick={()=>navigate('/guestCheckout')} style={{marginLeft:'46%',borderRadius:'10px', background:'#4CAF50',color:'white',borderColor:'white'}}>Guest Checkout</button>}
      {JSON.parse(localStorage.getItem('loginBoolCus'))?<CusCheckout/>:null}
    </div>
  )
}
