import OrderMenu from '../Order/OrderItemMenu';
import moment from 'moment';
const OrderItem = (data) => {

    const test = data.data.items;
    let it;
    test.map((data, ind) => {
        it = data.heading
    })

    const time = data.data.createdAt;
    return (
        <>



            <tr>
                <td>{data.data._id}</td>
                {/* <td>{data.data.items}</td> */}
                <td> {

                    
                        data.data.items.map((data, ind) => {
                            return <OrderMenu
                                key={ind}
                                data={data}
                            />
                        })
                    

                }</td>
                <td>{data.data.phone}</td>
                <td>{data.data.address}</td>
                <td>{moment(data.data.createdAt).format('hh mm A')}   on   {moment(data.data.createdAt).format('MMMM Do YYYY')}</td>
                {/* <td>{time}</td> */}
            </tr>


        </>
    )
}

export default OrderItem;