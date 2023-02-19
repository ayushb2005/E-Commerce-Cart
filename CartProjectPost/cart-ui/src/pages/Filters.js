import {React,useState} from 'react'
import GetASC from './getMethods/GetASC';
import GetDSC from './getMethods/GetDSC';
import MaxPrice from './getMethods/MaxPrice';
import MinPrice from './getMethods/MinPrice';
import { Link } from 'react-router-dom';
export default function Filters() {
    const [asc, setAsc] = useState(false)
    const [dsc, setDsc] = useState(false)
    const [max, setMax] = useState(0)
    const [min, setMin] = useState(0)
    const [maxBool,setMaxBool] = useState(false)
    const [minBool,setMinBool] = useState(false)

  return (
    <div>
        <Link to='/adminMain'>Main</Link>
       <br></br>
       Filters
       <br></br>
       <Link to='/create'>Create</Link>
       <br></br>
       <Link to='/editDelete'>Edit/Delete</Link>
       <br></br>
       <h1 style={{textAlign:'center'}}>Filter Products</h1>
       <br></br>
        Ascending alphabetically
        <input type="checkbox" onChange={e=>setAsc(!asc)} defaultChecked={asc}/>
        
        <br></br>
        Descending alphabetically
        <input type="checkbox" onChange={e=>setDsc(!dsc)} defaultChecked={dsc}/>
        
        <br></br>
        Max Price
        <input type="number" value={max} onChange={e=>setMax(e.target.value)}/>
        <button onClick={e=>setMaxBool(!maxBool)}>Go</button>
        
        <br></br>
        Min Price
        <input type="number" value={min} onChange={e=>setMin(e.target.value)}/>
        <button onClick={e=>setMinBool(!minBool)}>Go</button>

        {asc?<GetASC/>:""}
        {dsc?<GetDSC/>:""}
        {maxBool?<MaxPrice id={max.toString()}/>:""}
        {maxBool?<MinPrice id={min.toString()}/>:""}

    </div>
  )
}
