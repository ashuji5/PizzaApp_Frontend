const OrderMenu = (data) =>{
    console.log(data.heading);
    return(
        <>
        <tr className="last">
        {`${data.data.heading}`}
        </tr>
        </>
    )
}

export default OrderMenu;