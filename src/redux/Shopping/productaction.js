
import * as actiontypes from './actiontypes';

export const addToCart = (actionID) => {
    return{
        type : actiontypes.ADD_TO_CART,
        payload : {
            id : actionID
        }
    };
};

export const removeFromCart = (actionID) => {
    return{
        type : actiontypes.REMOVE,
        payload : {
            id : actionID
        }
    };
};

export const adjstQty = (actionID, value) => {
    return{
        type : actiontypes.ADJUST_QTY,
        payload : {
            id : actionID,
            qty : value
        }
    };

};


export const loadCurrentItem = (item) => {
    return {
      type: actiontypes.LOAD_CURRENT_ITEM,
      payload: item,
    };
  };