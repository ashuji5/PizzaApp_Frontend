import web from '../../Components/image/pizzap.png';
import mexican from '../../Components/image/mexican.png';
import chicken from '../../Components/image/chicken.png';
import cheese from '../../Components/image/cheese.png';
import vegetarian from '../../Components/image/vegetarian.png';
import * as actiontypes from './actiontypes';

const inState = {
    products: [
        {
            id: '1',
            heading: 'Pepperoni',
            img: web,
            desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
            price: '12.99'
        },

        {
            id: '2',
            heading: 'Mexican',
            img: mexican,
            desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
            price: '22.99'
        },

        {
            id: '3',
            heading: 'Chicken',
            img: chicken,
            desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
            price: '28.99'
        },

        {
            id: '4',
            heading: 'Cheese',
            img: cheese,
            desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
            price: '15.99'
        },

        {
            id: '5',
            heading: 'Vegetarian',
            img: vegetarian,
            desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
            price: '12.99'
        },

        {
            id: '6',
            heading: 'Pepperoni',
            img: web,
            desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
            price: '12.99'
        },

        {
            id: '7',
            heading: 'Mexican',
            img: mexican,
            desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
            price: '12.99'
        },

        {
            id: '8',
            heading: 'Cheese',
            img: cheese,
            desc: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc',
            price: '12.99'
        }
    ],
    
    cart : [],
    currentItem: null,
}

const productreducer = (state = inState, action) => {
    switch (action.type) {
        case actiontypes.ADD_TO_CART:
            //find that product
            const item = state.products.find((product)=>
                product.id === action.payload.id
            );

            //chech that product is already present in the cart or not
            const inCart = state.cart.find((item) => 
                item.id === action.payload.id ? true : false
            );
            return {
                // First we are checking that if item id present in the cart that we are updating the quantity otherwise we are taking the quantity as 1
                ...state,
                cart: inCart
                  ? state.cart.map((item) =>
                      item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  : [...state.cart, { ...item, qty: 1 }],
            };

        case actiontypes.ADJUST_QTY:
            return {
                ...state,
                cart : state.cart.map((item) => 
                    item.id === action.payload.id ? {...item, qty : +action.payload.qty} : item
                )
            };

        case actiontypes.REMOVE:
            return {
                ...state,
                cart : state.cart.filter((item) => 
                    item.id != action.payload.id
                )
            };

        case actiontypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem : action.payload
            };

        default:
            return state;
    }
}

export default productreducer;