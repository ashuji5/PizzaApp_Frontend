import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAdminOrder} from '../../redux/Shopping/orderaction';
import DashboardItem from './DashboardItem'
import openSocket from 'socket.io-client';


const Dash = () => {


    const dispatch = useDispatch();



  console.log('Dash page')
    const adminorders = useSelector(state => state.orderReducer.adminorders)
    let[allOrder, setAllOrder] = useState(true)

  
    
    
        
    

    const loading = useSelector(state => state.orderReducer.loading);

    console.log(JSON.parse(localStorage.getItem('profile')).result.role);


    let connectionOptions = {
        "force new connection": true,
        "reconnectionAttempts": "Infinity",
        "timeout": 10000,
        "transports": ["websocket"]
    };

    let v = 0;
    const socket = openSocket('http://localhost:5000', connectionOptions);
    socket.emit('join', 'adminRoom')

    console.log('gettingit')
   
    socket.on('orderPlaced', (data) =>{
        

        console.log('Dash Socket');
        
        console.log(allOrder);

        v=1;


         console.log(allOrder)
        if(adminorders){
         adminorders.unshift(data);
        }
    setAllOrder(allOrder = !allOrder);

    console.log(allOrder)

        
    })
  
    

    console.log('Lind')
    useEffect(() => {
        dispatch(getAdminOrder());
        
    }, [dispatch, allOrder]);


    if (loading === true) {
        return (
            <div>Loading</div>
        )
    }

    if(adminorders==undefined ){
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