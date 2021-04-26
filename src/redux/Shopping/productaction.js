
import * as actiontypes from './actiontypes';
//import * as api from '../../api/index';
import axios from 'axios';


export const getProducts = () => async(dispatch) => {

    try {

        dispatch({
            type: actiontypes.GET_PRODUCTS_REQUEST
        });

        const {data} = await axios.get(`/api`);

        dispatch({
            type : actiontypes.GET_PRODUCTS_SUCCESS,
            payload : data
        });
        
    } catch (error) {
        
        dispatch({
            type : actiontypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });

    }
   
};

export const getProductDetails = (id) => async(dispatch) => {

    try {

        dispatch({
            type: actiontypes.GET_PRODUCT_DETAILS_REQUEST
        });
    
        const {data} = await axios.get(`/api/${id}`);

        dispatch({
            type : actiontypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload : data
        });
        
    } catch (error) {
        
        dispatch({
            type : actiontypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });

    }
   
};

export const addToCart = (actionID) => async(dispatch, getState) =>{

    // dispatch({
    //     type: actiontypes.ADDING_CART
    // })

      const {data} = await axios.get(`/api/${actionID}`);

        dispatch({
            type : actiontypes.ADD_TO_CART,
            payload :  data,
                
        });
    
        localStorage.setItem("cart", JSON.stringify(getState().cartreducer.cart));
        
        

     
    
   
};

export const removeFromCart = (actionID) => (dispatch, getState) => {

    dispatch({
        type : actiontypes.REMOVE,
        payload : {
            id : actionID
        }
    })

    //localStorage.setItem("cart", JSON.stringify(getState.cartreducer.cart));
};

export const adjstQty = (actionID, value) => (dispatch) => {
    dispatch({
        type : actiontypes.ADJUST_QTY,
        payload : {
            id : actionID,
            qty : value
        }
    });

};

