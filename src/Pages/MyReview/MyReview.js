import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';

const MyReview = () => {
    const { user, logout } = useContext(AuthContext);
    const [review, setreview] = useState([]);

    useEffect(() => {
        fetch(`https://architec-artifice-server.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logout()
                }
                return res.json()
            })
            .then(data => setreview(data));
    }, [user?.email])

    const handleDelete = id => {
        const progress = window.confirm('Are You Sure delete it');
        if (progress) {
            fetch(`https://architec-artifice-server.vercel.app/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('delete Succes')
                        const remainingReview = review.filter(r => r._id != id);
                        setreview(remainingReview);
                    }
                });
        }
    }




    return (
        <div>
            <h2 className='text-center'>my review {review.length}</h2>


            <div className="   w-full">
                {
                    review.map(reviw => <ReviewTable key={reviw._id} reviw={reviw} handleDelete={handleDelete}></ReviewTable>)
                }
            </div>








            <div className="p-5 mx-auto sm:p-10 md:p-16 ">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://www.boredart.com/wp-content/uploads/2015/03/architecture-5.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#!" className="inline-block text-2xl font-semibold sm:text-3xl">the field of architectural construction has branched out to include </a>
                            <p className="text-xs dark:text-gray-400">By
                                <a rel="noopener noreferrer" href="#!" className="text-xs hover:underline">Leroy Jenkins</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-100">
                            <p>everything from ship design to interior decorating</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 py-12 bg-blue-400 dark:text-black">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            <br className="sm:hidden" />30%
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Find your dream property from our featured luxury properties  Use code:</span>
                            <span className="font-bold text-lg">MAMBA</span>
                        </div>
                        <a href="#!" rel="noreferrer noopener" alt="" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 font-bold dark:text-blue-500 dark:border-gray-400">Contact Us</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyReview;