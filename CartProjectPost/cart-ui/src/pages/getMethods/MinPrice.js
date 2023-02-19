import React,{useState,useEffect} from 'react'
import axios from 'axios'
function MinPrice({id}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        minPrice(id);
    }, [id]);
    const idSto = id
    const minPrice = (id) =>{
        axios.get("http://test.ayush.com:8080/api/cart/filterByMinPrice/"+id)
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          //console.log(err);
        })
    }

  return (
    <div>
        {minPrice(idSto)}
        {products.map((product)=>(
          <div className='all' key={product.id}> 
                    <h3>{product.name}</h3>
                    <p>Id: {product.id}</p>
                    <p>Description: {product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <p>Stock: {product.stock}</p>
                  </div>
          ))}
    </div>
  )
}

export default MinPrice



