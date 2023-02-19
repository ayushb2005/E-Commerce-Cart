import {React} from 'react'
import { Link } from 'react-router-dom'
import GetASC from './getMethods/GetASC'
export default function List2() {
    
  return (
    <div>
        <div style={{textAlign: 'center',fontSize:'150%'}}>
        Edit/Delete All Products
        </div>
       <Link to='/adminMain'>Main</Link>
       <br></br>
       <Link to ='/filters'>Filters</Link>
       <br></br>
       <Link to='/create'>Create</Link>
       <br></br>
       Edit/Delete
        <GetASC/>
    </div>
  )
}
