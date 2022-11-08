import React from 'react';
import { Link } from 'react-router-dom';

const Singup = () => {
    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card  w-full max-w-md shadow-3xl bg-base-100 p-4">
                        <h1 className="text-3xl text-center p-3 font-bold">Singup now!</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image URL" name='url' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Singup" />
                            </div>

                        </form>
                        <p className='text-center'> Have an Account <Link to='/login' className="text-primary label-text-alt link link-hover font-bold">Login</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;