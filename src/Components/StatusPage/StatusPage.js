import React, {  useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../StatusPage/Status.css'
import moment from 'moment';
import openSocket from 'socket.io-client';

const StatusPage = () => {

 const[time, setTime] = useState("");

    let check = [

        {
            "value": "status-line",
            "name": "Order_placed",
            "index": 0
        },
        {
            "value": "status-line",
            "name": "confirmed",
            "index": 1
        },
        {
            "value": "status-line",
            "name": "prepared",
            "index": 2
        },
        {
            "value": "status-line",
            "name": "delivered",
            "index": 3
        },
        {
            "value": "status-line",
            "name": "completed",
            "index": 4
        }
    ]



    // console.log(statuses)


    //    JSON.parse(check).forEach((e) =>{
    //        console.log(e);
    //    })







    const statusdata = useSelector(state => state.orderReducer)
    console.log(statusdata.status);



    if (statusdata.status) {

        let updateOrder = undefined;

        let connectionOptions = {
            "force new connection": true,
            "reconnectionAttempts": "Infinity",
            "timeout": 10000,
            "transports": ["websocket"]
        };

        let t = 0;

        const socket = openSocket('http://localhost:5000', connectionOptions);
        socket.emit('join', `order_${statusdata.status._id}`)

        socket.on('orderUpdated', (data) => {
            updateOrder = { ...statusdata.status };
            
            updateOrder.status = data.status

           console.log(updateOrder.updatedAt)

            console.log("socket")

            // let currentState = document.querySelectorAll('li.current');;
            // let stepState = document.querySelectorAll('li.step-completed');
            // let Order_placed = document.querySelectorAll('li.Order_placed');
            // let confirmed = document.querySelectorAll('li.confirmed');
            // let prepared = document.querySelectorAll('li.prepared');
            // let delivered = document.querySelectorAll('li.delivered');
            // let completed = document.querySelectorAll('li.completed');

            // if (currentState.length > 0) {
            //     if (currentState[0].classList)
            //         currentState[0].remove('.current')
            // }

            // if (stepState.length > 0) {
            //     if (stepState[0].classList)
            //         currentState[0].remove('.step_completed')
            // }

            // if (Order_placed.length > 0) {
            //     if (Order_placed[0].classList)
            //         currentState[0].remove('.Order_placed')
            // }

            // if (confirmed.length > 0) {
            //     if (confirmed[0].classList)
            //         confirmed[0].remove('.confirmed')
            // }

            // if (prepared.length > 0) {
            //     if (prepared[0].classList)
            //         currentState[0].remove('.prepared')
            // }

            let status = document.querySelectorAll('.status-line');
            let currentState = document.querySelectorAll('.current');
            let completeState = document.querySelectorAll('.step-completed');
            let time = document.createElement('small');
        
            if(currentState){
                currentState.forEach((e) =>{
                    e.classList.remove('current');
                })
            }
           
            if(completeState){
                completeState.forEach((e) =>{
                    e.classList.remove('step-completed')
                })
            }
            

            currentState.forEach((e) =>{
                console.log(e.classList);
            })

            completeState.forEach((e) => {
                console.log(e.classList)
            })


            if(currentState){
                currentState.forEach((e) =>{
                    e.classList.add('status-line');
                })
            }
           
            if(completeState){
                completeState.forEach((e) =>{
                    e.classList.add('status-line')
                })
            }

            currentState.forEach((e) =>{
                console.log(e.classList);
            })

            completeState.forEach((e) => {
                console.log(e.classList)
            })
            

            
            
            status = document.querySelectorAll('.status-line')
            time = document.querySelectorAll('small')
           
            let checkMate = true;
            status.forEach((e) =>{
                
                if(checkMate){
                   e.classList.add('step-completed')
                }

                if(e.dataset.status == updateOrder.status){
                    checkMate = false;
                    e.classList.add('step-completed')
                    console.log(e.getElementsByTagName('small'))
                    e.getElementsByTagName('small')[0].innerText = moment(updateOrder.updatedAt).format('hh:mm a');
                    
                    if(e.nextElementSibling)
                    e.nextElementSibling.classList.add('current')
                }

            })

        })

        t = 0;
        let status_data = true;
        check.forEach((e) => {

            if(status_data){
                e.value = "step-completed"
            }

            if (e.name == statusdata.status.status) {
                status_data = false;
                e.value = "step-completed"
                t = e.index + 1;
            }
        })

        if (t < 5) {
            check[t].value = "current";
        }

    }






    if (statusdata.status == undefined) {

        return (

            <h1>loading</h1>

        )
    }



    else {








        return (




            <>
                <section class="status">
                    <div class="container mx-auto ">
                        <div className="row status_row">
                            <div class="status_box col-lg-12 col-sm-12 col-xl-12">
                                <div class="status_heading">
                                    <h2 class="">Track delivery status</h2>
                                    <h6 class="status_id">{statusdata.status._id}</h6>
                                    <input id="hiddenInput" type="hidden" value={statusdata.status.status}></input>
                                </div>

                                <ul >
                                    <li className={check[0].value} data-status="Order_placed"><span>Order Placed</span><small className="small-tag"> </small>
                                    </li>
                                    <li className={check[1].value} data-status="confirmed"><span>Order confirmation</span><small className="small-tag"> </small>
                                    </li>
                                    <li className={check[2].value} data-status="prepared"><span>Preparation</span><small className="small-tag"> </small></li>
                                    <li className={check[3].value} data-status="delivered"><span>Out for delivery </span><small className="small-tag"> </small>
                                    </li>
                                    <li className={check[4].value} data-status="completed"><span>Complete</span><small className="small-tag"> </small></li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </section >

            </>
        )



    }



}





export default StatusPage;