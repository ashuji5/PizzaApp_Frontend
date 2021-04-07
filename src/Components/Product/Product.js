import React from 'react'
import {Link} from 'react-router-dom';
import { addToCart } from '../../redux/Shopping/productaction';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

function Product( {data}) {

    
    const dispatch = useDispatch();
    
    return (
        <>
            <div className=" product-group col-lg-3 col-md-4 col-12">

                <div className="product">
                    <img src={data.img} alt={data.img} />
                    <div class="product-body">
                        <div class="product-desc">
                            <Link to = {`/details/${data.id}`}>
                            <h3 className="text-center"> <a href="#">{data.heading}</a> </h3>
                            </Link>
                            <p className="text-center mx-2">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc</p>
                            <div class="favorite">
                                <p class="product-price">{data.price}$</p>

                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                        <div class="product-controls">
                             <button onClick = {() => dispatch(addToCart(data.id))} class="btn btn-get-started">Order <i class="fas fa-shopping-cart"></i>
                            </button>
                            
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product;