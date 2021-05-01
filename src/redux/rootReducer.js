import {combineReducers} from 'redux';
import productreducer from './Shopping/productreducer';
import {cartreducer} from './Shopping/cartreducer';
import {authreducer} from './Shopping/authreducer';
import {orderReducer} from './Shopping/orderReducer';

const rootReducer = combineReducers({
 productreducer, cartreducer, authreducer, orderReducer
});

export default rootReducer;