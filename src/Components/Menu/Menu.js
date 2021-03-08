import React from 'react';
import './Menu.css'
import booking from '../image/online-booking.svg';
import calories from '../image/calories.svg';
import delivery from '../image/delivery-man.svg';
import tray from '../image/tray.svg';
import Products from '../Product/Products';


const Menu = () => {

    
    
    
    return (
        <>
        
            <div className="hero">

            </div>
            <div className="container steps">
                <div className="some-text">

                    <p className=" f-text text-center mt-5">How We Do It</p>
                    <h1 className="text-center mt-1 mb-3"> <strong>We Dekiver food in 4 Steps</strong> </h1>
                    <p className="text-center">We make your experine worth remembering. We deliver to door-steps and make you fall love in food!!</p>
                </div>


                <div className="row mt-5">
                    <div class=" col-lg-3 col-md-6 col-sm-6 ">
                        <div class="icons">
                            <img className="img-fluid " src={booking} alt={booking} />

                            <h4 className="text-center" >Order</h4>
                            <p className="text-center" >There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="icons">
                            <img className="img-fluid" src={calories} alt={calories} />
                            <h4 className="text-center">Cook</h4>
                            <p className="text-center">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="icons">
                            <img className="img-fluid" src={delivery} alt={delivery} />
                            <h4 className="text-center">Deliver</h4>
                            <p className="text-center">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="icons">
                            <img className="img-fluid" src={tray} alt={tray} />
                            <h4 className="text-center">Enjoy</h4>
                            <p className="text-center">There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </div>



            </div>



           <Products/>




        </>
    )
}

export default Menu;