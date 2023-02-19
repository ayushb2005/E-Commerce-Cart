import {React,useState} from 'react'
import SearchAdmin from './SearchAdmin'
export default function NavBar2() {
    const [press, setPress] = useState()
    const [search, setSearch] = useState()

  return (
    <div>
<input onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            setPress(true)
                            { e.target.value === "" ? setSearch() : setSearch(e.target.value) }
                        }
                    }}
                        type="text" style={{ width: '20%', height: '40%', border: '120%', marginTop: '0%', marginRight: '4%', marginLeft: '5%',borderStyle:'solid', borderColor:'black', borderRadius:5 }} />
                        <br></br>
    {press ? <SearchAdmin regex={search} /> : ""}
    <br></br>
    </div>
  )
}
