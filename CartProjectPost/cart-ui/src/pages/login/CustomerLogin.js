import {React,useState} from 'react'
import shopping from '../LogoImage/shopping.png'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router'
import axios from 'axios'
export default function CustomerLogin() {
    const [red,setRed] = useState(false)
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    const [name,setName] = useState()
    const verifyCustomer =(e) =>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers:{'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Target-URL': 'http://test.ayush.com:8081/api/login/verifyCustomer'},
            body:JSON.stringify({
                email:email,
                password:pass
              })
        }
        fetch('http://test.ayush.com:1000', requestOptions)
        .then(res => res.json())
        .then((res)=>{
            if(res===200){
                axios.get('http://test.ayush.com:8081/api/login/getNameFromEmailCustomer/'+email)
                .then(res=>setName(res.data))
                localStorage.setItem('customerName',name[0].toUpperCase()+name.substring(1,name.length))
                localStorage.setItem('loginBoolCus',true)
                alert('Sucess, Welcome Customer')
                setRed(true)
            }else if(res===404){
                localStorage.setItem('customerName',"")
                localStorage.setItem('loginBoolCus',false)
                alert('Login Info Incorrect or not Customer')
            }
        })
    }
  return (

    <div>
        {JSON.parse(localStorage.getItem('loginBoolCus'))?<Navigate to='/'/>:""}
        <Link to='/'><img src={shopping} alt='logo' style={{height:'150%',width:'8%',marginLeft:'45%',marginTop:'15px'}}/></Link>
        <br></br>
        <div className='admin-container'>

        <form onSubmit={verifyCustomer}>
            <div className='admin-text'>
            Customer Login
            </div>
            <br></br>
            Email
            <br></br>
            <input onChange={e=>setEmail(e.target.value)} placeholder='email'/>
            <br></br>
            Password
            <br></br>
            <input type="password" onChange={e=>setPass(e.target.value)} placeholder='password'/>
            <br></br>
            <button type='submit' className='admin-button'>submit</button>
            <div className='toSignIn'>
            Not Registered? <Link to ='/signup' style={{textDecoration: 'none',color: '#4CAF50',fontSize:'100%'}}>sign-up</Link>
            </div>
        </form>
        </div>
        {red ? <Navigate to="/"/>:""}
    </div>

  )
}
