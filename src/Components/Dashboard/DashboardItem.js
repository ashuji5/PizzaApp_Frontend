import DashboardMenu from '../Dashboard/DashboardMenu'
import moment from 'moment';
import Select from 'react-select';
const DashboardItem = (data) => {

    const status = [
        { label: "Order_placed", value : "Order_placed" },
        { label: "Making", value: "Making" },
        { label: "Out for delivery", value: "Out for delivery"  },
        { label: "Delivered", value: "Delivered" }
      ];

      const getIt =  (e) =>{
           console.log(e.value);
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
                <td>  <Select onChange = {getIt} 
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