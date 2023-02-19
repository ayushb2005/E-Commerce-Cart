import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';
function GetAll() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      getAll();
    }, []);
    const getAll = () =>{
        axios.get("http://test.ayush.com:8080/api/cart/all")
        .then((res) => {
          //console.log(res.data)
          setProducts(res.data);
        })
        .catch((err) => {
          //console.log(err);
        })
    }
    
   
  return (
    <div>
        {products.map((product)=>(
          <div className='all' key={product.id}> 
                    <h3>{product.name}</h3> 
                    {/* <p>Id: {product.id}</p> */}
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <Link to={'/edit'+product.id}>edit page</Link>
                    <br></br>
                    <Link to={'/delete'+product.id}>delete page</Link>
                  </div>
          ))}
    </div>
  )
}

export default GetAll



