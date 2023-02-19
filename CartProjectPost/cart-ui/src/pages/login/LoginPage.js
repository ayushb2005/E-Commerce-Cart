import {useEffect, useState} from "react"
import axios from "axios"

function LoginPage(){
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    const [type,setType] = useState() 
    
    useEffect(()=>{
        if(type==="Admin"){
            alert(`${'Admin Logged In'}`)
        }else if(type==="Customer"){
            alert(`${'Welcome Customer'}`)
        }else if(type==="Wrong"){
            alert('Wrong email or password')
        }
    },[type])
    const verifyUser =(e)=>{
        e.preventDefault()
        axios.get('http://test.ayush.com:8081/api/login/verifyAdminB?email='+email+'&password='+pass)
        .then((res)=>{
            if(res.data==="Wrong"){
                axios.get('http://test.ayush.com:8081/api/login/verifyCustomerB?email='+email+'&password='+pass)
                .then((res)=>{
                    setType(res.data)
                }) 
            }else{
                setType(res.data)
            }
        })


 
    }
    return(
        <div>
            <form type ="submit" onSubmit={verifyUser}>
                Email<input onChange={e=>setEmail(e.target.value)}/>
                <br></br>
                Password<input onChange={e=>setPass(e.target.value)}/>
                <br></br>
                <button type="submit">submit</button>
            </form>
            {}
        </div>
        
    )
}

export default LoginPage

