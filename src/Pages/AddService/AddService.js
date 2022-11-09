import React from 'react';

const AddService = () => {
    return (
        <div>
            <h1 className='text-4xl text-center'>Add A New Service</h1>
            <form className=" p-5 ">
                <input type="text" name="title" placeholder="Add A Title" className="input border border-sky-500  mb-5 input-bordered w-full" />
                <input type="text" name="img" placeholder="Add A Image Link" className="input border border-sky-500  mb-5 input-bordered w-full" />
                <input type="text" name="price" placeholder="Add A Price" className="input border border-sky-500  mb-5 input-bordered w-full" />
                <input type="text" name="description" placeholder="Add A Description" className="input border border-sky-500 h-20 mb-5 input-bordered w-full" />
                <input type="submit" value="Add Service" className="px-4  py-1 text-center bg-gray-800 text-white rounded font-light hover:bg-gray-700" />
            </form>

        </div>
    );
};

export default AddService;