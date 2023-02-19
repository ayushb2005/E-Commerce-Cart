import {Link} from 'react-router-dom'
import { useState } from 'react'
export default function Create2(){
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [category,setCategory] = useState('')
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState(0)

    const postDataToApi = (e)=>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers:{'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Target-URL': 'http://test.ayush.com:8080/api/cart/create'},
            body:JSON.stringify({
                name: name,
                description: description,
                price: price,
                stock: stock,
                category: category
              })    
        };
        fetch('http://test.ayush.com:1000', requestOptions)
        .then(res =>{   
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
        .catch(error=>{
            alert(`${"ERROR REQUEST NOT SENT"} \n ${"Server Unavailable"}`)
        })
    }
    const profilePicture = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
    return(
        <div style={profilePicture}>
            <form onSubmit={postDataToApi}>
            Create New Product
            <br></br>
            <Link to ='/adminMain' style={{marginLeft:'-450%'}}>Main</Link>
            <br></br>
            <Link to ='/filters' style={{marginLeft:'-450%'}}>Filters</Link>
            <br></br>
            <div style={{marginLeft:'-450%'}}>Create</div>
            <Link to ='/editDelete' style={{marginLeft:'-450%'}}>Edit/Del Products</Link>

                <br></br>
                <label>Product Name</label>
                <br></br>
                <input type="text" value={name} onChange={e=>setName(e.target.value )}/>
                <br></br>
                <label>Description</label>
                <br></br>
                <textarea type ="text" value = {description} onChange={e=>setDescription(e.target.value)}/>
                <br></br>
                <label>Category</label>
                <br></br>
                <select value={category} onChange={e=>setCategory(e.target.value)}>
                                <option></option>
                                <option value="Baby">Baby</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Case">Case</option>
                                <option value="Pencils">Pencils</option>
                            </select>
                            <br></br>
                <label>List Price</label>
                <br></br>
                <input type="number"
                                value={price}
                                onChange={e=>setPrice(e.target.value)} />
                                <br></br>
                 <label>List Stock Available</label>
                 <br></br>
                 <input type="number" value={stock} onChange={e=>setStock(e.target.value)} />
                 <br></br>
                 <button type="submit">submit</button>
            </form>
        </div>
    )
}