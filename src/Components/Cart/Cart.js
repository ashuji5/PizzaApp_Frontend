import React from 'react'
import './Cart.css';
import emptyCart from '../image/empty-cart.png';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

function Cart() {

    const user = JSON.parse(localStorage.getItem('profile'));

    const cart = useSelector(state => state.cartreducer.cart);
    var totalPrice = 0;

    console.log(cart);

    cart.map(item => {
        totalPrice = totalPrice + parseFloat(item.price);
    })

 

    console.log(totalPrice);

    if(user){
    if (cart.length == 0) {
        return (
            <>
                <div className=" empty-page ">
                    <div className=" empty-cart">
                        <div className="empty-text">
                            <h2> Cart is empty... 🙁</h2>
                            <div className="cart-text">
                                <p>You probably haven't added anything to the cart yet. To Order a pizza, go to the menu page</p>
                            </div>
                        </div>
                        <div className="empty-img">
                            <img className="img-fluid" src={emptyCart} alt={emptyCart} />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    else {
        return (
            <>

                <div className="cart-page">
                    <div className="container ">
                        <div className="order-heading text-center mb-10">
                            <i class="fas fa-shopping-cart sum-img"></i>
                            <h3 className="sum"> Cart summary</h3>
                        </div>


                        <hr className="line"></hr>
                        <div className="row">
                            {cart.map((data, ind) => {
                                return <CartItem
                                    key={ind}
                                    data={data}
                                />
                            })}
                        </div>
                        <hr className="line"></hr>



                        <div className="total-price">
                            <p>Total Amount: <h4 className="amount">{totalPrice}$</h4></p>

                            <div>
                                <h5>Payement : COD</h5>

                                <form className="price-form">
                                    <label ><strong> Address :</strong> </label><br></br>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                    ></input> <br></br>
                                    <label className="mt-2"><strong> Phone No :</strong></label><br></br>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                    >
                                    </input><br></br>
                                </form>

                                
                                <button className="price-btn btn btn-get-started"> Order Now </button>
                                

                            </div>
                        </div>




                    </div>

                </div>
            </>
        )
    }

}

else{


    if (cart.length == 0) {
        return (
            <>
                <div className=" empty-page ">
                    <div className=" empty-cart">
                        <div className="empty-text">
                            <h2> Cart is empty... 🙁</h2>
                            <div className="cart-text">
                                <p>You probably haven't added anything to the cart yet. To Order a pizza, go to the menu page</p>
                            </div>
                        </div>
                        <div className="empty-img">
                            <img className="img-fluid" src={emptyCart} alt={emptyCart} />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    else {
        return (
            <>

                <div className="cart-page">
                    <div className="container ">
                        <div className="order-heading text-center mb-10">
                            <i class="fas fa-shopping-cart sum-img"></i>
                            <h3 className="sum"> Cart summary</h3>
                        </div>


                        <hr className="line"></hr>
                        <div className="row">
                            {cart.map((data, ind) => {
                                return <CartItem
                                    key={ind}
                                    data={data}
                                />
                            })}
                        </div>
                        <hr className="line"></hr>



                        <div className="total-price">
                            <p>Total Amount: <h4 className="amount">{totalPrice}$</h4></p>

                            <div>
                                <h5>Payement : COD</h5>

                                <form className="price-form">
                                    <label ><strong> Address :</strong> </label><br></br>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                    ></input> <br></br>
                                    <label className="mt-2"><strong> Phone No :</strong></label><br></br>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                    >
                                    </input><br></br>
                                </form>

                                <Link style = {{textDecoration : 'none'}} to="/login" >
                                <button className=" btn btn-get-started log-cont"> Login To Continue </button>
                                </Link>

                            </div>
                        </div>




                    </div>

                </div>
            </>
        )
    }



}

}

export default Cart