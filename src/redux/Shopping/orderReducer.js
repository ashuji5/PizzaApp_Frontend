import { GET_ADMIN_ORDER_FAIL, GET_ADMIN_ORDER_REQUEST, GET_ADMIN_ORDER_SUCCESS ,GET_STATUS, POST_ORDER, GET_ORDER_FAIL,GET_ORDER_REQUEST,GET_ORDER_SUCCESS} from './actiontypes';


const orderData = {
    adminorders : [],
    singleorder : [],
    loading : true,
    orders : [],
    status : null
}

export const orderReducer = ( state = orderData, action) => {
    switch(action.type){
     
        case POST_ORDER :

            localStorage.setItem('order', JSON.stringify({...action?.payload}));


            return {

                singleorder : action.payload
    };

            case GET_ORDER_REQUEST:
                return{
                    loading : true,
                    orders : []
                }
    
            case GET_ORDER_SUCCESS:
                return{
                    loading: false,
                    orders : action.payload
                }
                
            case GET_ORDER_FAIL:
                return{
                    loading: false,
                    error : action.payload
                }

                case GET_ADMIN_ORDER_REQUEST:
            return{
                loading : true,
                adminorders : []
            }

        case GET_ADMIN_ORDER_SUCCESS:
            return{
                loading: false,
                adminorders : action.payload
            }
            
        case GET_ADMIN_ORDER_FAIL:
            return{
                loading: false,
                error : action.payload
            }


            case GET_STATUS:
            return{
                status : action.payload
            }
        
         default :
         return state;   

    }
}