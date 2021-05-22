import DashboardMenu from '../Dashboard/DashboardMenu'
import moment from 'moment';
import Select from 'react-select';
import {useDispatch} from 'react-redux';
import {updateStatu} from '../../redux/Shopping/orderaction'
const DashboardItem = (data) => {

    const dispatch = useDispatch();

    const status = [
        { label: "Order_placed", value : "Order_placed" },
        { label: "confirmed", value: "confirmed" },
        { label: "prepared", value: "prepared"  },
        { label: "delivered", value: "delivered" },
        { label: "completed", value: "completed" }
      ];

      const updateIt =  (e) =>{

        dispatch(updateStatu(data.data._id, e.value));
           
      }
    
    
    return (
        <>



            <tr>
                <td>{data.data._id}</td>
                {/* <td>{data.data.items}</td> */}
                <td> {

                    
                        data.data.items.map((data, ind) => {
                            return <DashboardMenu
                                key={ind}
                                data={data}
                            />
                        })
                    

                }</td>
                <td>{data.data.phone}</td>
                <td>{data.data.address}</td>
                <td>  <Select onChange = {updateIt} 
                defaultValue =  { status.find((e) => {
                   return e.label == data.data.status
                })}
                options={status} />  </td>
                <td>{moment(data.data.createdAt).format('hh mm A')}   on   {moment(data.data.createdAt).format('MMMM Do YYYY')}</td>
                {/* <td>{time}</td> */}
            </tr>


        </>
    )
}

export default DashboardItem;