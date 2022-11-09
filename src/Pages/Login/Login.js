import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('');
    const { singIn, setLoading, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    console.log(from);
    const googleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div>
            <div className="hero w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card  w-full max-w-sm shadow-3xl bg-base-100 p-4">
                        <h1 className="text-3xl text-center p-3 font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <p className=' mb-4 ps-lg-5 text-error'>{error}</p>
                                <label className="label">
                                    <a href="#!" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                        </form>
                        <p className='text-center'> Create an Account <Link to='/singup' className="label-text-alt text-primary link font-bold link-hover">Singin</Link></p>
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

export default Login;