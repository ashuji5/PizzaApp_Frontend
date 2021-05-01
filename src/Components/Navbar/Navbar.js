import React, {useState, useEffect} from 'react';
import {LOGOUT}  from '../../redux/Shopping/actiontypes';
import '../Navbar/Navbar.css'
import web from '../image/pizza.svg'
import {Link, useLocation}  from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';


const Navbar = () => {

  const dispatch = useDispatch();
  const location = useLocation();
 
  const cart = useSelector(state => state.cartreducer.cart);
  console.log(cart);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


  useEffect(() => {
    const token = user?.token;

    
    setUser(JSON.parse(localStorage.getItem('profile')));
  
  },[location]);

  console.log(user);

  const logout = () => {
    dispatch({type : LOGOUT})
  }

  const [count, setCount] = useState(0);

  useEffect(() => {

    let inCount = 0;
    cart.forEach((item) => {
      inCount += item.qty;
    });

    setCount(inCount);

  },[count, cart])


  if(user?.token){
    return(

      <>

<section id="navigation">
        <nav className="navbar navbar-expand-lg ">
          <Link style={{ textDecoration: 'none' }} to ="/">
          <div className="navbar-brand"><img src={web} alt={web}/><strong >Pizza</strong> </div> 
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="  collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
              <div className="links">
                <li className="nav-item active">
                  <Link style={{ textDecoration: 'none' }} to ="/">
                  <div className="nav-link">Menu <span class="sr-only">(current)</span></div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/orders">
                  <div className="nav-link">Orders</div>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/login">
                  <div className="nav-link">Login</div>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/">
                  <div className="nav-link"  onClick = {logout} >Logout</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/dashboard">
                  <div className="nav-link"   >Dashboard</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to = "/cart">
                  <div className="nav-link cart" ><i className="fas fa-shopping-cart"></i><span>{count}</span></div>
                  </Link>
                </li>
              </div>
            </ul>

          </div>
        </nav>
      </section>

      </>
    )
  }



  else{
  
  return (
    <>
      <section id="navigation">
        <nav className="navbar navbar-expand-lg ">
          <Link style={{ textDecoration: 'none' }} to ="/">
          <div className="navbar-brand"><img src={web} alt={web}/><strong >Pizza</strong> </div> 
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="  collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
              <div className="links">
                <li className="nav-item active">
                  <Link style={{ textDecoration: 'none' }} to ="/">
                  <div className="nav-link">Menu <span class="sr-only">(current)</span></div>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/orders">
                  <div className="nav-link">Orders</div>
                  </Link>
                </li> */}
                 <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/login">
                  <div className="nav-link">Login</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/register">
                  <div className="nav-link">Register</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to = "/cart">
                  <div className="nav-link cart" ><i className="fas fa-shopping-cart"></i><span>{count}</span></div>
                  </Link>
                </li>
              </div>
            </ul>

          </div>
        </nav>
      </section>
    </>
  )

  }
}

// const mapStateToProps = state => {
//   return {
//     cart : state.productreducer.cart
//   }
// }

// export default connect(mapStateToProps)(Navbar);
export default Navbar;