import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const AdminOrderList = ({list}) => {
    const {_id} =list

    const [info, setInfo] = useState([])
    console.log('info', info)

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

    const handleUpdate = (id,) =>{
        const product = {id}
        fetch(`http://localhost:5000/updatedProduct/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log('uploaded')
        })
    }

    const handleChange = (id)=>{
        console.log('clicked', id)
        fetch(`http://localhost:5000/orderUpdate/${id}`)
        .then(res => res.json())
        .then(result => {
            console.log('successfully', result)
            setInfo(result)
        })
    }
    return (
        <div>
               {isAdmin && <div style={{display:'flex', marginLeft:'100px'}}>
                    {/* <td>1</td> */}
                    <div style={{width:"150px", height:'40px', borderLeft:'1px solid gray', borderRight:'1px solid gray', borderTop:'1px solid gray', borderBottom:'1px solid gray'}}>{list.name}</div>
                    <div style={{width:"150px",borderTop:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>{list.price}</div>
                    <div style={{width:"151px",borderTop:'1px solid gray', borderBottom:'1px solid gray', borderRight:'1px solid gray',}}>{ list.address}</div>

                    <div style={{width:"151px",borderTop:'1px solid gray',  borderBottom:'1px solid gray', borderRight:'1px solid gray',}}>
                    <select onClick={() => handleChange(_id)} onChange={handleUpdate} class="form-select" aria-label="Default select example">
                        <option selected>{info.status}</option>
                        <option value="1pending">pending</option>
                        <option value="pending">on pending</option>
                        <option value="done">done</option>
                        </select>
                    </div>
                    
                </div>}
        </div>
    );
};

export default AdminOrderList;