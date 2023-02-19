import React,{useState} from 'react'
import Search from './Search'
export default function SearchInput() {
    const [press,setPress]= useState()
    const [search,setSearch] = useState()
    
  return (
    <div>
        <input onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setPress(true)
                          setSearch(e.target.value)
                        }
                    }}
                    type="text" style={{ width: '100%', height: '40%', border: '120%', marginTop: '0%', marginRight: '4%', marginLeft: '5%',borderStyle:'solid', borderColor:'black', borderRadius:5 }}/>

        {press ? <Search regex={search}/>:""}
    </div>
  )
}
