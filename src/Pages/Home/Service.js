import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <div className="text-center flex align-middle justify-center content-center  p-5">
                <div className="max-w-xl">
                    <p className="text-primary"> Service</p>
                    <h2 className="text-3xl w-md mt-6 font-bold text-primary"> I Develop Comprehensive <br />Solutions For Each Project</h2>
                    <p className=''>We encourage employees at all levels to propose innovative, socially beneficial ideas that are novel and unique. Our internal teams consistently seek to enhance our environmental, ethical, and charitable practices.</p>
                </div> </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center content-center">

                {
                    services.map(service => <div key={service._id} className="max-w-xs mb-10 rounded-md shadow-md bg-blue-100 text-black">
                        <img src={service.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
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



                        // <div className='m-3' key={service._id}>
                        //     <div className="card lg:card-side bg-blue-100 shadow-xl">
                        //         <figure><img className='w-90 h-40' src= alt="Album" /></figure>
                        //         <div className="card-body">
                        //             <h2 className="card-title">New album is released!</h2>
                        //             <p>Click the button to listen on Spotiwhy app.</p>
                        //             <div className="card-actions justify-end">
                        //                 <Link to={`/services/${service._id}`} className="btn btn-primary">Details</Link>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                    )
                }
            </div>
            <div className="text-center p-5">
                <Link className="btn btn-primary" to='/services'>See All Service</Link>

            </div>






            <section className="bg-blue-50">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xltext-black">Your Desiner </h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-black">William F. Baker (engineer)</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xltext-black">William F. Baker </h3>
                            <p className="mt-3 text-lg text-black">is an American structural engineer known for engineering the Burj Khalifa,</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6text-black">Obtaining a bachelor's degree </h4>
                                        <p className="mt-2 text-black">civil engineering from the University of Missouri (1975),</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6text-black">Baker briefly worked for ExxonMobil  </h4>
                                        <p className="mt-2 text-black"> completed his master's degree at the University of Illinois (1980). In 1981,
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6text-black">Joined the architecture and engineering firm of Skidmore, .</h4>
                                        <p className="mt-2 text-black">Owings and Merrill, LLP (SOM) in Chicago; he became a partner there in 1996</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://qph.cf2.quoracdn.net/main-qimg-05067608c209329943e907e5c3b9e84b.webp" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xltext-black">William F. Baker </h3>
                                <p className="mt-3 text-lg text-black">is an American structural engineer known for engineering the Burj Khalifa,</p>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6text-black">International Award of Merit in Structural Engineering</h4>
                                            <p className="mt-2 text-black">
                                                In 2014, Baker was awarded the International Award of Merit in Structural Engineering from the International Association for Bridge and Structural Engineering[4] and in 2013 the T.R. Higgins Lectureship Award from the American Institute of Steel Construction
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6text-black">the University of Stuttgart </h4>
                                            <p className="mt-2 text-black">honorary professor at the University of Cambridge. He has received honorary doctorates from the University of Missouri in 2017, Illinois Institute of Technology in 2015, Heriot-Watt University in 2012, and the University of Stuttgart in 2011</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6text-black">Institution of Structural Engineers gave Baker with their Gold Medal</h4>
                                            <p className="mt-2 text-black">In 2011, he received an ASCE Outstanding Projects and Leaders (OPAL) Lifetime Award for Design.[5] On May 13, 2010, the Institution of Structural Engineers gave Baker with their Gold Medal, its highest accolade.[6] Baker was the first American to receive the Fritz Leonhardt Prize For Achievement in Structural Engineering, on July 11, 2009</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://chronicle.brightspotcdn.com/4e/64/cb07417135a2a991d7350d9e36c7/e3b0cbd73db7e9f70c51395f1102730b.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </div>
    );
};

export default Service;