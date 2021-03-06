import { AUTH, LOGOUT}  from './actiontypes';

export const authreducer = (state = {authdata : null}, action) => {

    switch(action.type){

        case AUTH : 
        localStorage.setItem('profile', JSON.stringify({...action?.data}));

        return{
            ...state, authdata : action?.data
        };

        case LOGOUT :
            localStorage.clear();

            return{
                ...state, authdata : null
            };

        default:
            return state;

    };

}