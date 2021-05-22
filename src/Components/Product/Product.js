import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/Shopping/productaction';

import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ data }) {


    const dispatch = useDispatch();






    const getIt = (id) => {

        // const dev = document.querySelectorAll('.cart-button');
        // console.log(dev);

        // dev.forEach((e) =>{
        //     e.classList.add('clicked');
        // })


        toast.warn(`🛒 Added to the Cart`,{
            position: "top-right",
            hideProgressBar: true,
            autoClose: 2000,

        })
        dispatch(addToCart(data._id))


        // dev.forEach((e) =>{
        //     e.classList.remove('clicked');
        // })

    }


    return (
        <>
            <div className=" product-group col-lg-3 col-md-4 col-12">

                <div className="product">
                    <img src={data.img} alt={data.img} />
                    <div class="product-body">
                        <div class="product-desc">
                            <Link to={`/details/${data._id}`}>
                                <h3 className="text-center"> <a href="#">{data.heading}</a> </h3>
                            </Link>
                            <p className="text-center mx-2">Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc</p>
                            <div class="favorite">
                                <p class="product-price">{data.price}$</p>

                                <i class="far fa-heart"></i>
                            </div>
                        </div>
                        <div class="product-controls">
                            <button onClick={() => getIt(data._id)} className=" cart-button btn btn-get-started "><span className="text">Add to cart       <i class="fas fa-shopping-cart"></i>
                            </span>
                            </button>

                        </div>
                    </div>
                </div>

            </div>

            <ToastContainer 
            
            />

        </>
    )

}

export default Product;