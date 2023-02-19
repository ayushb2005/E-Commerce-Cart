import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
function Edit(){
    let {pid} = useParams()
    useEffect(()=>{
      getData(idSto)
    },[])
    const idSto = pid;
    const [name,setName] = useState()
    const [description,setDescription] = useState()
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState(0)
    const [category,setCategory] = useState()
    
    const getData = (id) => {
        axios.get("http://test.ayush.com:8080/api/cart/getById/"+id)
        .then((res)=>{
          console.log(res)
            setName(res.data.name)
            setDescription(res.data.description)
            setPrice(res.data.price)
            setStock(res.data.stock)
            setCategory(res.data.category)
        })
        .catch((err) => {
            console.log(err);
          })
    }   
    const putDataToAPI = (e)=>{
      e.preventDefault()
      const requestOption = {
        method:'PUT',
        headers:{'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Target-URL': 'http://test.ayush.com:8080/api/cart/update/'+idSto},
        body:JSON.stringify({
          id:idSto,
          name:name,
          description:description,
          price:price,
          stock:stock,
          category:category
        })
      }
      fetch('http://test.ayush.com:1000',requestOption)
      .then(res=>{
        console.log(res)
        console.log(name)
        console.log(`${'http://test.ayush.com:8080/api/cart/update/'} ${idSto}`)
        if(!res.ok){
          alert(`${"ERROR REQUEST NOT SENT"} \n ${"Check your inputs again"}`)
        }else{
          alert(`${"SUCESS"}`)
          setName('')
          setDescription('')
          setCategory('')
          setPrice(0)
          setStock(0)
        }
      })
    }
    return(
        <div>
          <div className='edit-page-title'>
            Edit Page 
          </div>
          <Link to='/adminMain'>Main Page</Link>
          <br></br>
          <Link to ='/create'>Create</Link>
          <br></br>
          <Link to='/list'>List</Link>
          <br></br>
          Edit    
          <div className='read-only-id'>
            Id: {idSto}
            </div>
            <div className='edit-container'>      
              <form onSubmit={putDataToAPI}>
                  {/* <div className='edit-container-1'>
                  id (read only) <input value = {idSto} readOnly/>
                  </div> */}
                  <br></br>
                  <div className='edit-container-2'>
                  Name <input value={name} onChange={e=>setName(e.target.value)} className='input-2'/>
                  </div>
                  <br></br>
                  <div className='edit-container-3'>
                  Description
                    <br></br>
                   <textarea value = {description} onChange={e=>setDescription(e.target.value)} className='textarea-3'/>
                  </div>
                  <br></br>
                  <div className='edit-container-4'>
                  Case <input value ={category} className='input-3'/>
                  </div>
                  <br></br>
                  <div className='edit-container-5'>
                  Price <input type = "number" value = {price} onChange ={e=>setPrice(e.target.value)} className='input-4'/>
                  </div>
                  <br></br>
                  <div className='edit-container-6'>
                  Stock <input type="number" value={stock} onChange={e=>setStock(e.target.value)} className='input-5'/>
                  </div>
                  <br></br>
                  <button type="submit" className='edit-submit'>submit</button>
              </form>
            </div>
        </div>
    )
}
export default Edit