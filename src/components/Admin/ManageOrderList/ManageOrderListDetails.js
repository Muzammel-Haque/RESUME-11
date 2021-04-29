import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Delete from '../../../Icons/delete.png'

const ManageOrderListDetails = ({list}) => {
    const { _id} = list;

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
    const handleDelete= id =>{
        console.log(id)
        fetch(`http://localhost:5000/orderRemove/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete successfully')
        })
    }
    return (
        <div>
            {isAdmin && <div style={{display:'flex', marginLeft:'100px'}}>
                    {/* <td>1</td> */}
                    <div style={{width:"200px", height:'40px', borderLeft:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>{list.name}</div>
                    <div style={{width:"200px", borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>{list.price}</div>
                    <div style={{width:"201px", borderBottom:'1px solid gray', borderRight:'1px solid gray',}}>{ list.address}</div>
                    <div style={{width:"201px", borderBottom:'1px solid gray', borderRight:'1px solid gray',}}> <img onClick={() => handleDelete(_id)} style={{width:'30px'}} src={Delete} alt=""/> </div>
                </div>}
        </div>
    );
};

export default ManageOrderListDetails;