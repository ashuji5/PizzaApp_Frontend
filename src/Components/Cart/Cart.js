import React from 'react'
import './Cart.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

function Cart() {

 const cart = useSelector(state => state.productreducer.cart);

    return (
        <>
            <div className="container ">
                <div className="order-heading text-center mb-10"> 
                <h2 > Your Orders!!</h2>
                </div>
                <div className="row">
                   {cart.map((data, ind) => {
                      return <CartItem
                       key = {ind}
                       data = {data}
                       />
                   })}
                </div>
            </div>
        </>
    )
}

export default Cart