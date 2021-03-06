import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../Order/Order.css';
import { getOrder } from '../../redux/Shopping/orderaction';

import OrderItem from '../Order/OrderItme';

function Order() {


    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


    const orders = useSelector(state => state.orderReducer.orders)
    const loading = useSelector(state => state.orderReducer.loading);


    useEffect(() => {
        dispatch(getOrder(user.result._id));
    }, [dispatch]);


    if (loading === true) {
        return (
            <div>Loading</div>
        )
    }

    if(orders==undefined){
        return(
            <div>Loading...</div>
        )
    }


    else {
        return (
            <div className="main-order">
                <h2>Orders</h2>
                <div className="o-table">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th className="order-id">Orders</th>
                                <th>Items</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                        <td>Dom</td>
                        <td>6000</td>
                    </tr>
                    <tr class="">
                        <td>Melissa</td>
                        <td>5150</td>
                    </tr> */}

                            {orders.map((data, ind) => {
                                return <OrderItem
                                    key={ind}
                                    data={data}
                                />
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}

export default Order