import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminSidebar from '../../Shared/adminSidebar/AdminSidebar';
import AdminOrderList from '../AdminOrderList/AdminOrderList';

const AdminOrder = () => {

    const [orderList, setOrderList] = useState([])
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(()=>{
        fetch('http://localhost:5000/adminOrder')
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, [])

    

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="row">
            <div className="col-md-2">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-10">
                <div style={{marginTop:'none', padding:'10px', height:'600px', width:'1200px', textAlign:'center'}}>
                    {isAdmin && <div style={{display:'flex', marginLeft:'100px', marginTop:'30px'}}>
                        {/* <th>Index of</th> */}
                        <div style={{width:"150px",borderLeft:'1px solid gray', borderTop:'1px solid gray', borderRight:'1px solid gray', }}>Name</div>
                        <div style={{width:"150px", borderTop:'1px solid gray', borderRight:'1px solid gray', }}>Price</div>
                        <div style={{width:"151px", borderTop:'1px solid gray', borderRight:'1px solid gray', }}>Address</div>
                        <div style={{width:"151px", borderTop:'1px solid gray', borderRight:'1px solid gray', }}>Status</div>
                    </div>}
                    {
                        orderList.map(list => <AdminOrderList list={list}></AdminOrderList>)
                    }
                </div>
            </div>
        </div>
        
    );
};

export default AdminOrder;