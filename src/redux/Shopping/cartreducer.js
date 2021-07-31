import * as actiontypes from './actiontypes';
import { useSelector } from 'react-redux'

export const cartreducer = (state = {cart :  JSON.parse(localStorage.getItem('cart'))  ? JSON.parse(localStorage.getItem('cart')) : [] }, action) => {

   // const products = useSelector(state.productreducer.products);


    switch(action.type){
        case actiontypes.ADD_TO_CART:
            const item = action.payload;

            const existItem= state.cart.find((x) => x._id === item._id ? true : false);


            return {
                // First we are checking that if item id present in the cart that we are updating the quantity otherwise we are taking the quantity as 1
                ...state,
                cart: existItem
                  ? state.cart.map((item) =>
                      item._id === action.payload._id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  : [...state.cart, { ...item, qty: 1 }],
            };

            // if(existItem){
            //     return{
            //         ...state,
            //         cart : state.cart.map((x) => x.id === existItem.id ? item : x),
            //     };
            // }

            // else{
            //     return{
            //         ...state,
            //         cart : [...state.cart, item]
            //     };
            // }

            
            // const item = state.products.find((x) => x.id === action.payload.id);
            // //chech that product is already present in the cart or not
            // var inCart = false;
            // if(state.cart!= undefined){
            //  inCart = state.cart.find((item) => 
            //     item._id === action.payload.id ? true : false
            // );}
            // return {
            //     // First we are checking that if item id present in the cart that we are updating the quantity otherwise we are taking the quantity as 1
            //     ...state,
            //     cart: inCart
            //       ? state.cart.map((item) =>
            //           item._id === action.payload.id
            //             ? { ...item, qty: item.qty + 1 }
            //             : item
            //         )
            //       : [...state.cart, { ...item, qty: 1 }],
            // };
        


            case actiontypes.REMOVE:
                return {
                    ...state,
                    cart : state.cart.filter((item) => 
                        item._id != action.payload.id
                    )
                };
                
                case actiontypes.ADJUST_QTY:
            return {
                ...state,
                cart : state.cart.map((item) => 
                    item._id === action.payload.id ? {...item, qty : +action.payload.qty} : item
                )
            };

            case actiontypes.CLEAR_CART :
                return{
                    ...state,
                    cart : []
                };

            default : 
            return state
    }
}