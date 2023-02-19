import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function SearchAdmin({ regex }) { 
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
  
  return (
    <div>
      {minPrice(idSto)}
      {products.map((product) => (
        <div className='all' key={product.id} >
          <div style={{ fontSize: 0 }}>{product.id}</div>
          <h3>{product.name}</h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <Link to={'/edit'+product.id}>edit product</Link>
          <br></br>
          <Link to={'/delete'+product.id}>delete product</Link>
        </div>
       
      ))}
    </div>

  )
}

export default SearchAdmin











