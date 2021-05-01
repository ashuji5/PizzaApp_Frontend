const DashboardMenu = (data) =>{
    console.log(data.heading);
    return(
        <>
        <tr className="last">
        {`${data.data.heading} - ${data.data.qty}pcs`}
        </tr>
        </>
    )
}

export default DashboardMenu;