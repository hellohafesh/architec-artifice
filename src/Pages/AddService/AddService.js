import React from 'react';

const AddService = () => {


    const addService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;


        const service = {

            title,
            img,
            price,
            description
        }

        fetch('https://architec-artifice-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Add a Service");
                    form.reset();

                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1 className='text-4xl text-center'>Add A New Service</h1>
            <form onSubmit={addService} className=" p-5 ">
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