import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from './redux/Shopping/productaction';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Redirect, Route}  from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Order from './Components/Order/Order';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dash from './Components/Dashboard/Dash'
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/SingleProduct/Single';
import StatusPage from './Components/StatusPage/StatusPage';

const App = () => {

  const dispatch = useDispatch();

  const productsData = useSelector(state => state.productreducer)
  const{products, loading, error} = productsData;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if(loading == true){
    return(
      <>
      <h2>Loading</h2>
      </>
    )
  }

  else if(error){
    return(
      <h2>{error}</h2>
    )
  }



  else{
  return(
    <>

  
   
   <BrowserRouter>
   <div>
   <Navbar/>
   <Route exact path ="/" component={Menu}/>
   <Route  path ="/orders" component = {Order
  }/>
   <Route path ="/cart" component ={Cart}/>
   <Route path ="/login" component ={Login}/>
   <Route path ="/register" component ={Register}/> 
   <Route path ="/dashboard" component = {Dash}/>  
   <Route path = "/details/:id" component = {SingleProduct} />
   <Route path = "/status/:id" component = {StatusPage} />
   <Redirect to ="/"/>
   </div>
   </BrowserRouter>
   </>
  )
  }

}



export default App;
