import React, {useState, useEffect} from 'react';
import '../Navbar/Navbar.css'
import web from '../image/pizza.svg'
import {Link}  from 'react-router-dom';
import {useSelector} from 'react-redux';


const Navbar = () => {

  const cart = useSelector(state => state.productreducer.cart);

  const [count, setCount] = useState(0);

  useEffect(() => {

    let inCount = 0;
    cart.forEach((item) => {
      inCount += item.qty;
    });

    setCount(inCount);

  },[count, cart])


  
  return (
    <>
      <section id="navigation">
        <nav className="navbar navbar-expand-lg ">
          <Link to ="/">
          <div className="navbar-brand"><img src={web} alt={web}/><strong >Pizza</strong> </div> 
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="  collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
              <div className="links">
                <li className="nav-item active">
                  <Link to ="/">
                  <div className="nav-link">Menu <span class="sr-only">(current)</span></div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders">
                  <div className="nav-link">Orders</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to = "/cart">
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

// const mapStateToProps = state => {
//   return {
//     cart : state.productreducer.cart
//   }
// }

// export default connect(mapStateToProps)(Navbar);
export default Navbar;