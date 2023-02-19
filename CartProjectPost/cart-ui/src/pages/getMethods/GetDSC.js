import React,{useState,useEffect} from 'react'
import axios from 'axios'
function GetDSC(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getASC();
    }, []);
    const getASC = () =>{
        axios.get("http://test.ayush.com:8080/api/cart/sortDSC")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          //console.log(err);
        })

    }
    return(
        <div>
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
export default GetDSC