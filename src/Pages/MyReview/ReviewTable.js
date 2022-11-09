import React from 'react';

const ReviewTable = ({ reviw, handleDelete }) => {
    const { serviceName, _id, comment, rating, } = reviw;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const acomment = form.comment.value;
        console.log(acomment);


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
    }
    const buttonhandle = id => {
        console.log(id);
    }

    return (

        <tr>

            <td>
                <h1>{serviceName}</h1>
            </td>
            <td>
                comment: {comment}
            </td>
            <td>Rating{rating}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
            <th>
                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className="btn btn-xs">Edit</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit Your Comment</h3>
                        <form onSubmit={handleUpdate} className=''>
                            <input type="text" name="comment" placeholder="Add A Title" className="input border border-sky-500  mb-5 input-bordered " defaultValue={comment} /> <br />
                            <input type="submit" onClick={() => buttonhandle(_id)} className="input border border-sky-500  mb-5 input-bordered " value="Change" />

                        </form>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Cancle</label>
                        </div>
                    </div>
                </div>
            </th>

        </tr>
    );
};

export default ReviewTable;