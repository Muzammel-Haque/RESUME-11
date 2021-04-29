import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Delete from '../../../Icons/delete.png'

const ManageServiceDetails = ({data}) => {

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
    const { _id} = data;
    const handleDelete= id =>{
        console.log(id)
        fetch(`http://localhost:5000/remove/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete successfully')
        })
    }
    return (
        <div>
                {isAdmin && <div style={{display:'flex', marginLeft:'300px'}}>
                    {/* <td>1</td> */}
                    <div style={{width:"200px", borderLeft:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>{data.name}</div>
                    <div style={{width:"200px", borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>{data.price}</div>
                    <div style={{borderBottom:'1px solid gray', borderRight:'1px solid gray',}}><button onClick={() => handleDelete(_id)} style={{width:"200px", border:'none', backgroundColor:'tomato'}}> <img onClick={() => handleDelete(_id)} style={{width:'30px'}} src={Delete} alt=""/> </button></div>
                </div>}
        </div>
    );
};

export default ManageServiceDetails;