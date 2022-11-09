import React, { useEffect, useState } from 'react';

const AllService = () => {
    const [allservices, setAllservices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])
    return (
        <div>
            <h1>ALl Service</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {
                    allservices.map(service => <div className='m-3' key={service._id}>
                        <div className="card lg:card-side bg-blue-100 shadow-xl">
                            <figure><img className='w-90 h-40' src={service.img} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New album is released!</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllService;