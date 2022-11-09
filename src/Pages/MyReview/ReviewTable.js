import React from 'react';

const ReviewTable = ({ reviw, handleDelete }) => {
    const { serviceName, _id, comment, rating } = reviw;



    return (

        <tr>

            <td>
                <h1>Service NAme :   {serviceName}</h1>
            </td>
            <td>
                comment: {comment}
            </td>
            <td>Rating{rating}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
            <th></th>

        </tr>
    );
};

export default ReviewTable;