import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://unlock-your-dreams-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <div className="text-center p-5">
                <h2 className="text-5xl mt-6 font-bold text-primary"> Our Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, natus iste, maiores quibusdam optio voluptatibus cupiditate sit libero voluptates impedit eaque similique, ex commodi ea quae! Cumque, placeat dolorum necessitatibus .</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                {
                    services.map(service => <div className='m-3' key={service.id}>
                        <div className="card lg:card-side bg-blue-100 shadow-xl">
                            <figure><img className='w-90 h-40' src={service.image_url} alt="Album" /></figure>
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
            <div className="text-center p-5">
                <Link className="btn btn-primary" to='/services'>See All Service</Link>

            </div>

        </div>
    );
};

export default Service;