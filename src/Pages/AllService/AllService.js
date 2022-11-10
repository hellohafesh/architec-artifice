import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllService = () => {
    const [allservices, setAllservices] = useState([]);
    useEffect(() => {
        fetch('https://architec-artifice-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])
    return (
        <div>
            <h1 className='mb-10 text-center text-primary font-bold text-4xl'>ALL Services</h1>
            <div className="grid grid-cols-1 justify-items-center justify-center content-center md:grid-cols-2 lg:grid-cols-3 ">

                {
                    allservices.map(service => <div key={service._id} className="max-w-xs mb-10 rounded-md shadow-md bg-blue-100 text-black">
                        <PhotoProvider>
                            <PhotoView src={service.img}>
                                <img src={service.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl  font-semibold tracking-wide">{service.title}</h2>
                                <p className="">{service.description.slice(0, 100)}</p>
                            </div>
                            <div className=" flex justify-between">
                                <Link to={`/services/${service._id}`} className="w-1/2 p-3 font-semibold tracking-wide rounded-md bg-primary text-gray-900">Details</Link>
                                <p> Ratings: {service.rating ? service.rating : <>New</>}</p>
                            </div>
                        </div>
                    </div>

                    )
                }
            </div>











            <h1 className='text-4xl text-center text-primary font-bold mb-10'>What Is Our Speciallity</h1>

            <section className="">
                <div className="container flex  flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-blue-300">
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug"> CIVIL CONSTRUCTION</p>
                                <p className="leading-snug">Buildstone is always up for challenges and takes pride in finding the best solutions that make you stand out.</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">MECHANICAL CONSTRUCTION</p>
                                <p className="leading-snug">Builstone knows how to succeed: dedication, timeliness, and excellence, as well as competence, comprehension</p>
                            </div>
                        </div>
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">PROJECT MANAGEMENT</p>
                                <p className="leading-snug">Collaborating with Buildstond means obtaining an established, trustworthy, and respected comprehensive partner.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 bg-blue-200">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src="https://images.adsttc.com/media/images/5fa3/eb2b/63c0/1756/4c00/0254/medium_jpg/oaphoto11_edit_1.jpg?1604578072" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllService;