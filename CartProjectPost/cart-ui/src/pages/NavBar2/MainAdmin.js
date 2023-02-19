
import NavBar2 from "./NavBar2";
import { Link, Navigate } from "react-router-dom";
import { React, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import shopping from '../LogoImage/shopping.png'
import Button from 'react-bootstrap/Button';
export default function MainAdmin() {

    const [bool, setBool] = useState(false)
    const logoutAdmin = () => {
        setBool(true)
        localStorage.setItem('loginBool', false)
        alert('Sucessfully logged out')
    }
    return (
        <div>
            {/* <button onClick={logoutAdmin} style={{ borderRadius: 10, background: '#00BFFF', fontSize: '100%', width: "10%", height: "40px", borderColor: '#00BFFF', marginLeft: '50%', marginTop: '20px' }}>Admin Logout</button> */}
            <Link to='/' className='nav-logo'><img src={shopping} alt='logo' style={{ height: '30%', width: '8%', marginLeft: '2%' }} /></Link>
            {/* <Button variant="primary" refresh="true"style={{marginLeft:"40%",marginTop:"%"}} onClick={logoutAdmin}>Logout</Button> */}
            <div style={{ marginTop: '-5%', marginLeft: '35%' }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                        Create/Edit/Delete/Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"><Link to='/create'>Create New Entity</Link></Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><Link to='/editDelete'>Edit/Delete</Link></Dropdown.Item>
                        <Dropdown.Item href="#/action-2"><Link to='/filters'>Filters</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div style={{ marginLeft: '8%', marginTop: '-1.7%' }}>
                <NavBar2 />
            </div>
            <br></br>
            <Button variant="primary" refresh="true"style={{marginLeft:"50%",marginTop:"-12%",marginTop:'-7%'}} onClick={logoutAdmin}>Logout</Button>
            {bool ? <Navigate to='/' /> : ""}
        </div>
    )
}
