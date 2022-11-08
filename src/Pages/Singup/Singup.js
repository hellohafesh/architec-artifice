import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Singup = () => {
    const { createUser, updateUserProfile, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();




    const googleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                form.reset();
                handleUserProfile(name, photoURL);

            })
            .catch(error => {
                console.error(error.message);
            });
        const handleUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.log(error));
        }


    }
    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card  w-full max-w-md shadow-3xl bg-base-100 p-4">
                        <h1 className="text-3xl text-center p-3 font-bold">Singup now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">
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
                                <input type="text" placeholder="Image URL" name='url' className="input input-bordered" />
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
                        <div className="text-center">
                            <h5><b>or sign up with:</b></h5>
                            <button type="button" onClick={googleSingIn} className="btn btn-primary btn-outline btn-floating m-2">
                                <FaGoogle style={{ height: "40px", width: "40px" }} />
                            </button>

                            <button type="button" className="btn btn-primary btn-outline btn-floating m-2">
                                <FaGithub style={{ height: "40px", width: "40px" }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;