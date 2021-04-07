import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, adjstQty } from '../../redux/Shopping/productaction';

const CartItem = (data) => {

    const increment = () => {
        var value = parseInt(document.getElementById('demo').value);
        const key = data.data.qty;
        value = key;
        value++;
        document.getElementById('demo').value = value;
        dispatch(adjstQty(data.data.id, value));
        console.log(value);
    }

    const decrement = () => {
        var value = parseInt(document.getElementById('demo').value);
        const key = data.data.qty;
        value = key;
        if (value > 1) {
            value--;
            document.getElementById('demo').value = value;
            dispatch(adjstQty(data.data.id, value));
        }
        console.log(value);
    }

    // console.log(data);

    const dispatch = useDispatch();

    return (
        <>


            <div className="col-lg-12 col-md-12 col-sm-12 mb-3 shopping-cart">


                {/* start */}




                <div class="item">

                    <div class="image">
                        <img src={data.data.img} alt={data.data.img} />
                    </div>

                    <div class="description">
                        <h5>{data.data.heading}</h5>
                    </div>


                    <div class="quantity">
                        <input className="plus" type="button"
                            onClick={increment}
                            value= "+"
                        />
                        <input
                            id="demo"
                            className="input"
                            type="text"
                            name="name"
                            value={data.data.qty}
                        />

                        <input className="minus" type="button"
                            onClick={decrement}
                            value="-"
                        />

                    </div>

                    <div className="mt-3" ><p>{data.data.price}$</p></div>

                    <i class="fas fa-trash " onClick={() => dispatch(removeFromCart(data.data.id))} ></i>

                </div>







                {/* end */}


            </div>

        </>
    )
}

export default CartItem;