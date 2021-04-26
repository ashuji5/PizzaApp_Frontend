import {combineReducers} from 'redux';
import productreducer from './Shopping/productreducer';
import {cartreducer} from './Shopping/cartreducer';
import {authreducer} from './Shopping/authreducer';

const rootReducer = combineReducers({
 productreducer, cartreducer, authreducer
});

export default rootReducer;