import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAdminOrder} from '../../redux/Shopping/orderaction';
import DashboardItem from './DashboardItem'

const Dash = () => {


    const dispatch = useDispatch();



    const adminorders = useSelector(state => state.orderReducer.adminorders)
    const loading = useSelector(state => state.orderReducer.loading);

    console.log(JSON.parse(localStorage.getItem('profile')).result.role);

    useEffect(() => {
        dispatch(getAdminOrder());
    }, [dispatch]);


    if (loading === true) {
        return (
            <div>Loading</div>
        )
    }

    if(adminorders==undefined){
        return(
            <div>Loading...</div>
        )
    }

   else{
    return(
        <>
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
                                <th>Order-Status</th>
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

                            {adminorders.map((data, ind) => {
                                return <DashboardItem
                                    key={ind}
                                    data={data}
                                />
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
   }
}

export default Dash;