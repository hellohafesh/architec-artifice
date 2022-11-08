import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                        <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                        <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                        <li className='font-semibold' ><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case font-bold text-xl">Architec Artifice</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-3">
                    <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                    <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                    <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                    <li className='font-semibold'><Link className='btn btn-outline btn-primary m-3' to='/'>Home</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                <div className="w-10 rounded-full">
                    <img className='rounded-full' src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.15752-9/312458179_644695647143147_5481044752098789577_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGWlH-V0UE6SG3-UpyrhavSfDYWaUL6QjB8NhZpQvpCML27rlAJQRsDlxNnAs7bEfvty94ooB92GkN8roeo0lpO&_nc_ohc=jAzcqW5x2r0AX-imH_B&_nc_ht=scontent.fdac24-1.fna&oh=03_AdRqU1DoXi4DtTc90SjosxXFINY_zQngBZZPuWmoHunQIg&oe=63915AA2" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Header;