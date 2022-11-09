import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setreview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`)

            .then(res => res.json())
            .then(data => setreview(data));
    }, [user?.email])

    const handleDelete = id => {
        const progress = window.confirm('Are You Sure delete it');
        if (progress) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
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


            <div className="overflow-x-auto w-full">
                <table className="table w-full">


                    <tbody>
                        {
                            review.map(reviw => <ReviewTable key={reviw._id} reviw={reviw} handleDelete={handleDelete}></ReviewTable>)
                        }

                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default MyReview;