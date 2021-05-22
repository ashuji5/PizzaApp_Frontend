import {POST_ORDER, GET_ORDER_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS,GET_ADMIN_ORDER_FAIL,GET_ADMIN_ORDER_REQUEST, GET_ADMIN_ORDER_SUCCESS} from './actiontypes';
import {postOrder, gettingOrder, getAdminDash, updateStatus} from '../../api';

export const createOrder = (FormData, price, cart, user) => async(dispatch) =>{

    try {

       // console.log("Yep entered")
        //const mprice = {"price" : price};
        const tprice = JSON.parse(JSON.stringify({"price" : price}));
       // console.log( tprice);

       const data = {"FormData" : FormData,
    
       "price" : tprice,
       "cart" : cart,
       "user" : user
    }

    console.log(data);

         const {order} = await postOrder(data);
        // console.log(order);

         dispatch({type : POST_ORDER, payload : order});
        
    } catch (error) {

        console.log(error);
        
    }

};

export const getOrder = (id) => async(dispatch) => {

    const _id = JSON.parse(JSON.stringify({"id" : id}));

    //console.log( _id);

    try {

        dispatch({
            type: GET_ORDER_REQUEST
        });
    
        const {data} = await gettingOrder(_id);

        

        dispatch({
            type : GET_ORDER_SUCCESS,
            payload : data
        });
        
    } catch (error) {
        
        dispatch({
            type : GET_ORDER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });

    }
   
};

export const getAdminOrder = () => async(dispatch) => {

    

    try {

        dispatch({
            type: GET_ADMIN_ORDER_REQUEST
        });
    
        const {data} = await getAdminDash();

        

        dispatch({
            type : GET_ADMIN_ORDER_SUCCESS,
            payload : data
        });
        
    } catch (error) {
        
        dispatch({
            type : GET_ADMIN_ORDER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });

    }
   
};

export const updateStatu = (order, status) => async(dispatch) => {

    

    try {

        const data = JSON.parse(JSON.stringify({
            "order" : order,
            "status" : status
        }))

        console.log("Reached this part");
         await updateStatus(data);
        console.log("Not this")
        
        
       
    } catch (error) {
        
       console.log(error);

    }
   
};