import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ReviewTable = ({ reviw, handleDelete }) => {
    const { serviceName, _id, comment, rating, } = reviw;

    // const handleUpdate = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const acomment = form.comment.value;
    //     console.log(acomment);


    // fetch(`http://localhost:5000/myreviews/${id}`, {
    //     method: 'PATCH',
    //  headers: {
    // 'content-type': 'application/json'
    // },
    // body: JSON.stringify(acomment)
    // })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 alert('Update Succes')
    //                 const remaining = review.filter(r => r._id != id);
    // const aprove = review.find(r => r._id === id);
    // aprove.acomment = acomment;
    // const newReview = [...remaining,aprove]
    //                 setreview(newReview);
    //             }
    //         });
    // }
    const buttonhandle = id => {
        console.log(id);
    }

    return (

        <div className=' m-10 '>




            <div className="flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-blue-400 dark:border-violet-400">
                <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none rounded-full dark:bg-violet-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                </span>
                <div className="flex-1 p-2">
                    <p className="text-sm dark:text-gray-100">S. Name : {serviceName}</p>
                    <p className="text-sm dark:text-gray-100">Comment : {comment}</p>
                    <p className="text-sm font-bold dark:text-gray-100">Rating : {rating}</p>
                </div>
                <button onClick={() => handleDelete(_id)} type="button" className="ml-6 p-2 text-red-500">
                    <FaTrash style={{ height: "30px", width: "30px" }} />
                </button>
            </div>


        </div>
    );
};

export default ReviewTable;