import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
function Search({ regex }) { 
  let{name} = useParams()
  const [products, setProducts] = useState([]);
  useEffect(() => {
    minPrice(regex);
  }, [regex])
  const idSto = regex
  const minPrice = (regex) => {
    axios.get("http://test.ayush.com:8080/api/cart/regex?regex=" + regex)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }


  
  const [cart, setCart] = useState([[]])

  //spread for the local storage
  const addPush = (id) => {
    var found = false;
    for(var i =1;i<cart.length;i++){
      if(cart[i][0] === id){
        cart[i][1] +=1
        setCart(prev =>
          [...prev, ]
        )
        found = true
      }
    }
    if(found===false){
      setCart(prev =>
        [...prev, [id,1]]
      )
    }


  }
  
  // const addPush = () => {
  //   setCart(prev =>
  //     [...prev, id]
  //   )
  // }

  //gets back the old value of the old state 
  useEffect(()=>{
    const data = localStorage.getItem('items')
    if(data!=null) setCart(JSON.parse(data))
  },[])

  //new value 
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cart))
  },[cart])
  name=regex
  return (
    <div>
      {/* {window.location.reload(false)} */}
      {/* {window.history.pushState({}, null, 'http://localhost:3000/search?='+name)} */}
      {minPrice(idSto)}
      {products.map((product) => (
        <div className='all' key={product.id} >
          <div style={{ fontSize: 0 }}></div>
          <h3>{product.name} 
          <h3 align="right"><button className='addCart' onClick={()=>addPush(product.id)} style={{borderRadius:'10px',background:'yellow',borderColor:'white',outline:'none',height:'40px',width:'150px',fontFamily:'Papyrus',fontSize:'20px'}}>add to cart</button></h3>
          </h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
       
      ))}
    </div>

  )
}

export default Search











