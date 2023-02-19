import {React,useState} from 'react'
import { Navigate } from 'react-router'
import shopping from '../LogoImage/shopping.png'
import { Link } from 'react-router-dom'


export default function AdminLogin() {
    const [red,setRed] = useState(false)
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    //  
    const verifyAdmin =(e) =>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers:{'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Target-URL': 'http://test.ayush.com:8081/api/login/verifyAdmin'},
            body:JSON.stringify({
                email:email,
                password:pass
              })
        }
        fetch('http://test.ayush.com:1000', requestOptions)
        .then(res => res.json())
        .then((res)=>{
            if(res===200){
                localStorage.setItem('loginBool',true)//admin
                alert('Sucess, Welcome Admin')
                setRed(true)
                
            }else if(res===404){
                localStorage.setItem('customerName',"")
                localStorage.setItem('loginBool',false)
                alert('Login Info Incorrect or not Admin User')
            }
        })
    }

  return (
    <div>
        {JSON.parse(localStorage.getItem('loginBool'))?<Navigate to='/adminMain'/>:null}
        <Link to='/'><img src={shopping} alt='logo' style={{height:'150%',width:'8%',marginLeft:'45%'}}/></Link>
        <br></br>
        <div className='admin-container'>
        <form onSubmit={verifyAdmin}>
            <div className='admin-text'>
            Admin Login
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
        {red ? <Navigate to="/adminMain"/>:""}
    </div>
  )
}
