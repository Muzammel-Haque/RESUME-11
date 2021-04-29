import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ListDetails from '../ListDetails/ListDetails';

const OrderList = () => {
    const [list, setList]= useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log('listing', list)
    console.log("emailing", loggedInUser)

    useEffect(()=>{

        // fetch('http://localhost:5000/orderList?email='+loggedInUser.email, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type' : 'application/json',
        //         authorization : `Bearer: ${sessionStorage.getItem('token')}`
        //     }
        // })
        fetch('http://localhost:5000/orderList?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setList(data))

    }, [])
    console.log('daaaaaa', setList)

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <div className="row">
                    {
                        list.map(list => <ListDetails orderList={list}></ListDetails>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;