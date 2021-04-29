import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminSidebar from '../../Shared/adminSidebar/AdminSidebar';
import ManageServiceDetails from './ManageServiceDetails';

const MangeService = () => {
    const [service, setService] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (

        <div className="row">
            <div className="col-md-2">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-2">
                {isAdmin && <div style={{marginTop:'none', padding:'10px', height:'600px', width:'1200px', textAlign:'center'}}>
                        <div style={{display:'flex', marginLeft:'300px', marginTop:'30px'}}>
                            {/* <th>Index of</th> */}
                            <div style={{width:"200px", borderTop:'1px solid gray', borderLeft:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>Name</div>
                            <div style={{width:"200px", borderTop:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>Price</div>
                            <div style={{width:"201px", borderTop:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>Delete</div>
                        </div>
                    {
                        service.map(data => <ManageServiceDetails data={data}></ManageServiceDetails>)
                    }
                </div>}
            </div>
        </div>
    );
};

export default MangeService;