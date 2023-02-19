import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom' 
import shopping from '../LogoImage/shopping.png'


export default function SignUp() {
    const [red,setRed] = useState(false)
    const [fName,setFName] = useState()
    const [lName,setLName] = useState()
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    const postUserToAPI = (e) =>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers:{'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Target-URL': 'http://test.ayush.com:8081/api/login/create'},
            body:JSON.stringify({
                firstName:fName,
                lastName:lName,
                email:email,
                password:pass,
                userType:"customer"
            })
        }
        fetch('http://test.ayush.com:1000',requestOptions)
        .then((res)=>{
            console.log(res)
            if(!res.ok){
                alert(`${"ERROR REQUEST NOT SENT"} \n ${"Check your inputs again"}`)
            }else{
                alert(`${'Welcome to The Cart'} \n ${'Sucessful sign up'}`)
                setRed(true)
                setFName('')
                setLName('')
                setEmail('')
                setPass('')
            }
        })
    }
    return (
        <div className = 'signup'>
            {JSON.parse(localStorage.getItem('loginBoolCus'))?<Navigate to='/'/>:""}
            <Link to='/'><img src={shopping} alt='logo' style={{height:'150%',width:'8%',marginLeft:'45%'}}/></Link>
            <div className='signup-container'>
            <form onSubmit={postUserToAPI}>
                <br></br>
                <br></br>
                <br></br>
                <div className='signup-text'>
                Sign up
                </div>
                <div>
                <br></br>
                First Name
                <br></br>
                <input onChange={e=>setFName(e.target.value)} placeholder='First Name'/>
                </div>
                Last Name 
                <br></br>
                <input onChange={e=>setLName(e.target.value)} placeholder='Last Name'/>
                <br></br>
                Email 
                <br></br>
                <input onChange={e=>setEmail(e.target.value)} placeholder='Email'/>
                <br></br>
                Password
                <br></br>
                <input type ="password" onChange={e=>setPass(e.target.value)} placeholder='Password'/>
                <br></br>
                <br></br>
                <button type='submit' className='signup-button' >submit</button>
                <div className = 'toSignIn'>
                    Already Registered? <Link to ='/loginCustomer' style={{textDecoration: 'none',color: '#4CAF50',fontSize:'100%'}}>sign-in</Link>
                </div>
            </form>
            {red ? <Navigate to="/"/>:""}
        </div>
        </div>
    )
}
