import React, { useEffect, useState } from 'react';
import RepairDetails from '../RepairDetails/RepairDetails';

const ProvidedService = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [])
    console.log(info)
        
    return (
        <div className="row">
                <h1 style={{textAlign:'center'}}>Our Services</h1>
                <div style={{width:'90%', margin:'60px auto'}} className="row">
                    {
                        info.map(data => <RepairDetails maker={data}></RepairDetails>)
                    }
                </div>
        </div>
    );
};

export default ProvidedService;