import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { user, logout } = useContext(AuthContext);
    const logouthbutton = () => [
        logout()
            .then(() => {

                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    ]
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/services'>services</Link></li>
                        <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/blogs'>blogs</Link></li>

                        {user?.uid ?
                            <>
                                <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/blogs'>My Reviews</Link></li>

                                <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/addservice'>Add Service</Link></li>
                                <li className='font-semibold'><Link onClick={logouthbutton} className='btn btn-outline btn-primary m-3' to='/singup'>Logout</Link></li></>

                            :


                            <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/login'>login</Link></li>

                        }



                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case font-bold text-xl">Architec Artifice</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-3">
                    <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                    <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/services'>services</Link></li>
                    <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/blogs'>blogs</Link></li>

                    {user?.uid ? <>
                        <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/blogs'>My Reviews</Link></li>

                        <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/addservice'>Add Service</Link></li>
                        <li className='font-semibold'><Link onClick={logouthbutton} className='btn btn-outline btn-primary m-3' to='/singup'>Logout</Link></li>
                    </>
                        :
                        <>

                            <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/login'>login</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">

                <div className="w-10 rounded-full">
                    {
                        user?.photoURL ? <img title={user?.displayName} alt='' className='rounded-full' src={user?.photoURL}></img> : <FontAwesomeIcon className='rounded-full' style={{ height: '40px', width: '40px', borderRadius: '50px' }} icon={faCircleUser} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;