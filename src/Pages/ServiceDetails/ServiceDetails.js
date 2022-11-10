import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?id=${service._id}`)

            .then(res => res.json())
            .then(data => setReviews(data));
    }, [service?._id]);



    const handleComment = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const rating = form.rating.value;
        const review = {
            service: service._id,
            serviceName: service.title,
            email: user.email,
            comment,
            photo: user.photoURL,
            rating
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert("Comment Posted");

                    if (data.insertedId.length > 0) {
                        const newRev = review;
                        console.log(newRev);
                        const allrev = reviews;

                        const totalreview = [newRev, ...allrev];
                        console.log(totalreview);
                        setReviews(totalreview);
                        form.reset();

                    }



                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <h1 className='text-5xl text-center mb-10'>  ServiceDetails</h1>
            <section className="bg-blue-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-blue-100">
                        <img src={service.img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-focus:underline">{service.title}</h3>
                            <p>{service.description}</p>
                            <div className=" flex justify-between pt-2 content-end">
                                <p className='text-2xl font-bold bg-indigo-600 text-white rounded-lg p-2 '>Price : ${service.price}</p>
                                <p className='text-2xl font-bold bg-indigo-600 text-white rounded-lg p-2 '>{service.rating ? <>Rating : {service.rating}</> : <>No Rating</>}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <h1 className='text-center font-bold text-3xl text-primary'>{service.title}, Service Review</h1>
            <div className=" border-solid rounded-xl m-5 border-2 border-sky-500">
                <div className="p-10">
                    <h1 className='text-2xl text-center mb-8  text-primary'>All Comment : {reviews.length}</h1>

                    {
                        reviews.map(r => <div className="flex flex-row pl-4 mb-5   py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-blue-200 border-violet-400">
                            <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none rounded-full bg-violet-400 text-gray-900">
                                {
                                    r.photo ? <img alt='' style={{ height: '30px', width: '30px' }} className='rounded-full' src={r.photo}></img> : <FontAwesomeIcon className='rounded-full' style={{ height: '30px', width: '30px', borderRadius: '40px' }} icon={faCircleUser} />
                                }
                            </span>
                            <div className="flex-1 p-2 ">
                                <p className=" text-black">Comment : {r.comment}</p>
                            </div>
                            <button type="button" className="ml-6 p-2 text-black">
                                <p className=" text-black">Rating : {r.rating}</p>
                            </button>
                        </div>)
                    }
                </div>




                <div className="flex  bg-white-800 ">

                    <div className="w-full p-10 bg-gray pt-4 rounded shadow-lg">
                        <div className="flex bg-blue-300 p-5 rounded-xl w-1/3 ml-3 mb-5">
                            <div className="mr-3">
                                {
                                    user?.photoURL ? <img title={user?.displayName} alt='' style={{ height: '40px', width: '40px' }} className='rounded-full' src={user?.photoURL}></img>
                                        :
                                        <FontAwesomeIcon className='rounded-full' style={{ height: '40px', width: '40px', borderRadius: '50px' }} icon={faCircleUser} />
                                }
                            </div>
                            <div>
                                <h1 className="font-semibold">{user ? user?.displayName : <>User</>}</h1>
                                <p className="text-xs ">Post A Comment</p>
                            </div>

                        </div>

                        {
                            user ? <form onSubmit={handleComment} className="mt-3 p-3 w-full">
                                <input rows="3" name='comment' className="border border-sky-500  p-2 mb-3 rounded w-1/2 h-20" placeholder="Write your Comment..." type="text" required /> <br />

                                <label>Choose a Rating:</label>
                                <br />
                                <select id="cars" className='border border-sky-500 rounded w-1/5 h-10 ' name="rating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                                <div>
                                    <input value='Submit' type='submit' className="px-4 mt-5 py-1 text-center bg-gray-800 text-white rounded font-light hover:bg-white" />
                                </div>

                            </form> :
                                <div className=''>
                                    <input rows="3" className="border  border-sky-500 mb-5 p-2 rounded w-1/2 h-20" placeholder="Write your Comment..." type="text" /> <br />
                                    <label>Choose a Rating:</label>
                                    <br />
                                    <select id="cars" className='border border-sky-500 mb-5 rounded w-1/5 h-10 ' name="rating">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <br />
                                    <Link to='/login' className="px-4 mt-10 p-3  py-1 text-center bg-gray-800 text-white rounded font-light hover:bg-white"> Need To Login </Link></div>
                        }
                    </div>

                </div>
                <div className="flex flex-col max-w-1/3 p-8 shadow-sm rounded  lg:p-12 bg-blue-400 ">
                    <div className="flex flex-col w-full">
                        <h2 className="text-3xl font-semibold text-black text-center">Customer reviews</h2>
                        <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                            <div className="flex">
                                <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 ">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 ">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                            </div>
                            <span className="">3.8 out of 5</span>
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-white">
                                    <div className="bg-black h-4 w-5/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-white">
                                    <div className="bg-black h-4 w-4/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-white">
                                    <div className="bg-black h-4 w-3/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-white">
                                    <div className="bg-black h-4 w-2/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                <div className="flex-1 h-4 overflow-hidden rounded-sm bg-white">
                                    <div className="bg-black h-4 w-1/6"></div>
                                </div>
                                <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default ServiceDetails;