import {React,useEffect,useState} from 'react'
import axios from 'axios'
import Pagination from 'react-bootstrap/Pagination';

export default function PaginationBut() {
   const[page,setPage] = useState(0)
   const [products,setProducts] = useState([])

useEffect(()=>{
    if (page===0) {
        backward()
    }
},[page])


   const backward = async() =>{
    if(page<=1){
        setPage(1)
        const res = await axios.get('http://test.ayush.com:8080/api/cart/allWithPaginationZA?pageNo=1&pageSize=10&field=name')
        setProducts(res.data)
    }else{
        setPage(page-1)
        const res = await axios.get('http://test.ayush.com:8080/api/cart/allWithPaginationZA?pageNo='+(page-1)+'&pageSize=10&field=name')
        setProducts(res.data)
    }

}
const forward = async() =>{
  if(page===9){
    return;
  }
  setPage(page+1)
    const res = await axios.get('http://test.ayush.com:8080/api/cart/allWithPaginationZA?pageNo='+(page+1)+'&pageSize=10&field=name')
    setProducts(res.data)}

const [cart, setCart] = useState([[]])



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
//old value
useEffect(()=>{
    const data = localStorage.getItem('items')
    if(data!=null) setCart(JSON.parse(data))
  },[])

  //new value 
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cart))
  },[cart])

  return (
    
    <div>
        {products.map((product) => (
        <div className='all' key={product.id} >
          <h3 >{product.name} 
            <h3 align="right"><button className='addCart' align="right" onClick={()=>addPush(product.id)} style={{borderRadius:'10px',background:'#39e75f',borderColor:'white',outline:'none',height:'40px',width:'150px',fontFamily:'Papyrus',fontSize:'20px'}}>add to cart</button></h3>
          </h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
        <Pagination style={{marginTop:"0%",marginLeft:"50%"}}>
        <Pagination.Prev onClick={backward}/>
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={forward}/>
        </Pagination>
    </div>
  )
}
