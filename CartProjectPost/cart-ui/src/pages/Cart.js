import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import shopping from './LogoImage/shopping.png'
import { useNavigate } from 'react-router-dom'
export default function Cart() {
  //gets the value of the item to display it with quantity
  useEffect(()=>{
    getVal()
  },[])
  const [val,setVal] = useState(JSON.parse(localStorage.getItem('items')))
  const [products,setProducts] = useState([])
  const getVal = async () =>{
    for(var i =1; i<val.length;i++){
      const res = await axios.get("http://test.ayush.com:8080/api/cart/getById/"+val[i][0])
        const x = {id:res.data.id,name:res.data.name,
          description:res.data.description,category:res.data.category,
          price:res.data.price,stock:res.data.stock,quantity:val[i][1]}
          setProducts(prev =>
            [...prev, x]
          )
    }
    
  }


  //delete functionality from LC
  useEffect(()=>{
    del()
  },[])

  var id = 0;
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('items')))
  const del = (id)=>{
    for(var i =1; i<cart.length; i++){
      if(cart[i][0] === id){
        setCart(cart.filter(item=>{return item!==cart[i]}))
        window.location.reload(false)
      }
    }
  }
 

//const update =()=>{
const update = (e,id) =>{
  console.log('value of e' + e)
  for(var i =1; i<cart.length;i++){
    if(cart[i][0] === id){
      cart[i][1] = Number(e)
      setCart(prev =>
        [...prev, ]
      )
    }
  }
  window.location.reload(false)
}
// useEffect(()=>{
//   update()
// },[])
  //old value
  useEffect(()=>{
    const data = localStorage.getItem('items')
    if(data!=null) setCart(JSON.parse(data))
  },[])

  //new value 
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cart))
  },[cart])

  var total=0
  const navigate = useNavigate();
  return (
    <div>
      <Link to='/' className='nav-logo' ><img src={shopping} alt='logo' style={{ marginLeft:'50%',height: '30%', width: '10%' }} /></Link>
      <br></br>
      {products.map((product) => (
        <div className='all' key={product.id}>
          <div style={{ fontSize: 0 }}>{id=product.id}</div>
            <div>
              <h3>{product.name}</h3>
            </div>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <div style={{ fontSize: 0 }}>{total+=product.price*product.quantity}</div>
          <button onClick={e=>del(product.id)} style={{borderRadius:'10px',background:'#39e75f',borderColor:'white'}}>delete</button>
          <br></br>
          Quantity
          <br></br>
          <select onChange={e=>update(e.target.value,product.id)}>
            <option>{product.quantity}</option>
            <option value = "1">{1}</option>
            <option value = "2">{2}</option>
            <option value = "3">{3}</option>
            <option value = "4">{4}</option>
            <option value = "5">{5}</option>
            <option value = "6">{6}</option>
            <option value = "7">{7}</option>
            <option value = "8">{8}</option>
            <option value = "9">{9}</option>
          </select>
          <br></br>
          <input placeholder="10+" type="number" min={10} onKeyPress={(e)=>{
            if(e.key==="Enter"){
              {update(e.target.value,product.id)}
            }
            
          }}/>
          <p></p>
          <p></p>
        </div>
      ))}
      <br></br>
      <div style={{marginLeft:'52%',fontSize:'20px'}}>
      Total: ${Math.round(total * 100) / 100}
      </div>
      <br></br>
      <button onClick = {()=>navigate('/checkout')} style={{borderRadius:'10px',borderColor:'white',background:'#39e75f',marginLeft:'45%',width:'20%',display:'block',fontSize:'20px'}}>Checkout</button>
      {/* <Link className='scale'to ='/checkout' style={{textDecoration: 'none',fontSize:'20px'}}>Checkout</Link> */}
    </div>
  )
}
