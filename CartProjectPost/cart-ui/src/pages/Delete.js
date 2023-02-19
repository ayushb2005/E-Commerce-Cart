import { useEffect ,useState} from "react"
import { useParams} from "react-router-dom"
import { Navigate } from 'react-router'

function Delete(){
    let {did} = useParams()
    const idSto = did
    const [red,setRed] = useState(false)
    useEffect(()=>{
        del()
    },[])
    const del = (e) =>{
        const requestOption = {
            method:'DELETE',
            headers:{
                'Target-URL': 'http://test.ayush.com:8080/api/cart/delete/'+idSto
            }
        }
        fetch('http://test.ayush.com:1000',requestOption)
        .then(res=>{
            alert(`${"SUCESS"} \n ${"Item Deleted"}`)
            setRed(true)
        })
        
    }
    return(
        <div>
            {red ? <Navigate to='/list'/>:""}
        </div>
    )
}   
export default Delete