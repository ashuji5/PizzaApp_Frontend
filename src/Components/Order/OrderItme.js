import {useState} from 'react'
import OrderMenu from '../Order/OrderItemMenu';
import {GET_STATUS} from "../../redux/Shopping/actiontypes";
import { Link } from 'react-router-dom'
import {getStatus} from '../../api';
import moment from 'moment';
import {useDispatch} from 'react-redux';
const OrderItem = (data) => {

    const dispatch = useDispatch();

    const getIt = async(id) =>{

            console.log("I entered")

            const{data} = await getStatus(id);
          dispatch({type : GET_STATUS, payload : data});
          
            
        

     
    }

    return (
        <>



            <tr>
            < Link onClick = { () => {getIt(data.data._id)}} to={`/status/${data.data._id}`}>
             
                <td  >

                        
                        {data.data._id}
                    
                </td>
                </ Link>
                {/* <td>{data.data.items}</td> */}
                <td> {


                    data.data.items.map((data, ind) => {
                        return <OrderMenu
                            key={ind}
                            data={data}
                        />
                    })


                }</td>
                <td>{data.data.phone}</td>
                <td>{data.data.address}</td>
                <td>{moment(data.data.createdAt).format('hh mm A')}   on   {moment(data.data.createdAt).format('MMMM Do YYYY')}</td>
                {/* <td>{time}</td> */}
            </tr>

            
        </>
    )
}

export default OrderItem;