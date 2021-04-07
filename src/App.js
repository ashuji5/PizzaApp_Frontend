import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Redirect, Route}  from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';

const App = () => {

  return(
    <>
   
   <BrowserRouter>
   <div>
   <Navbar/>
   <Route exact path ="/" component={Menu}/>
   <Route  path ="/orders" component = {Order}/>
   <Route path ="/cart" component ={Cart}/>
   <Route path ="/login" component ={Login}/>
   <Route path ="/register" component ={Register}/>   
   <Redirect to ="/"/>
   </div>
   </BrowserRouter>
   </>
  )

}

export default App;
