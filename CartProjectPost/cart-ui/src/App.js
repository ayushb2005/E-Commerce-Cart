import React from "react";
import Create from './pages/Create'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import ErrorPage from "./pages/ErrorPage"
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/login/SignUp";
import AdminLogin from "./pages/login/AdminLogin";
import CustomerLogin from "./pages/login/CustomerLogin";
import 'bootstrap/dist/css/bootstrap.min.css';
import ExNavBar from "./pages/navbar/ExNavBar";
import Cart from "./pages/Cart";
import CheckAuth from "./pages/authentication/CheckAuth"
import MainAdmin from "./pages/NavBar2/MainAdmin";
import List2 from "./pages/List2";
import Filters from "./pages/Filters";
import Checkout from "./pages/Checkout";
import Undefined from "./pages/Undefined";
import GuestCheckout from "./pages/GuestCheckout";
function App() {
  //end page for cc details and shipping: make another auth checking if userlog true or false
  //add /nameOfProduct when something is searched
  //push state

  return( 
      <Router>
          <Routes>
            <Route path = '/signup' element={<SignUp/>}/>  
            <Route path='/login' element = {<LoginPage/>}/> 
            <Route path='/loginAdmin' element={<AdminLogin/>}/> 
            <Route path ='/loginCustomer' element={<CustomerLogin/>}/> 
            <Route path = '*' element={<ErrorPage/>}/> 
            <Route path='/' element={<ExNavBar/>}/>
            <Route path='/cart' element={<Cart/>}></Route>

            {/* Testing */}
            <Route path='/search?=:name'></Route>
            <Route path ='/search?=undefined' element={<Undefined/>}></Route>

            {/* Auth depending on logged status*/}
            
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/guestCheckout' element={<GuestCheckout/>}></Route>
        

            {/* Admin Paths */}
            <Route element={<CheckAuth/>}>      
              <Route path = '/adminMain' element={<MainAdmin/>}></Route>
              <Route path = '/editDelete' element={<List2/>}></Route>
              <Route path = '/filters' element={<Filters/>}></Route>
              <Route path = '/create' element={<Create/>}/>
              <Route path='/edit:pid' element = {<Edit/>}/>
              <Route path='delete:did' element={<Delete/>}/>
            </Route>  
          </Routes>
      </Router>
  )
}

  export default App;

