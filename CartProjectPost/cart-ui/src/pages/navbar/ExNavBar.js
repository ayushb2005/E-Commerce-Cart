import Container from 'react-bootstrap/Container';
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from 'react-router-dom';
import shopping from '../LogoImage/shopping.png'
import Search from './Search';
import Dropdown from 'react-bootstrap/Dropdown';
import PaginationBut from '../PaginationBut';
//import CartImg3 from 'C:/Users/ayush/Documents/Amazon Cart/cart-ui/src/pages/LogoImage/CartImg3.png'
import CartImg3 from '../LogoImage/CartImg3.png'
function ExNavBar() {
    const [press, setPress] = useState()
    const [search, setSearch] = useState()
    const logout = ()=>{    
        if(JSON.parse(localStorage.getItem('loginBoolCus'))){
            const x = localStorage.getItem('customerName')
            localStorage.setItem('loginBoolCus',false)
            localStorage.setItem('customerName',"")
            alert('Sucessfully logged out '+x)
        }else{
            alert(' Guest \n No User Logged In')
        }
       
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/' className='nav-logo' ><img src={shopping} alt='logo' style={{ height: '150%', width: '60%' }} /></Link> 
                    <input onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            setPress(true)
                            { e.target.value === "" ? setSearch() : setSearch(e.target.value) }
                        }
                    }}
                        type="text" placeholder="search" style={{ width: '100%', height: '40%', border: '120%', marginTop: '0%', marginRight: '4%', marginLeft: '5%',borderStyle:'solid', borderColor:'black', borderRadius:5 }} />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            <Dropdown style={{ marginTop: '3%',marginLeft:'10%' }}>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Sign Up/Login
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <Dropdown.Item value="1"><Link to='/signup' style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '100%' }}>Sign-Up</Link></Dropdown.Item>
                                    <br></br>
                                    <Dropdown.Item value="2"><Link to='/loginCustomer' style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '100%' }}>Customer Login</Link></Dropdown.Item>
                                    <br></br>
                                    <Dropdown.Item value="3"><Link to='/loginAdmin' style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '100%' }}>Admin Login</Link></Dropdown.Item>
                                    <br></br>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <button onClick={logout} style={{marginRight:'15%',marginTop:'0.5%',borderRadius:10, background:'#00BFFF',fontSize: '100%',width: "30%", height: "40px", borderColor:'#00BFFF',marginLeft:'4%'}}>logout</button>
                    <button><Link to='/cart' onChange={() => window.location.reload()} style={{ textDecoration: 'none', color: '#4CAF50', fontSize: '100%'}}><img src={CartImg3} style={{ height: '10%', width: '100%' }} alt="" /></Link></button>
                </Container>
            </Navbar>
            {press ? <Search regex={search} /> : ""}
            <PaginationBut/>
            {/* {window.history.pushState({}, null, 'http://localhost:3000/search?='+search)} */}
        </div>
    );
}

export default ExNavBar;