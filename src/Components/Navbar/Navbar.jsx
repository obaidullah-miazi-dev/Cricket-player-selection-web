import React from 'react';
import Navlogo from '../../assets/logo.png'
import Navcoin from '../../assets/coin.png'
const Navbar = () => {
    return (
        <div className="navbar mt-5 md:w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="px-1 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52  shadow">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <a className="cursor-pointer text-xl">
                    <img src={Navlogo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500 font-medium">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <a className='border-2 border-gray-200 flex items-center gap-2 py-2 md:px-4 px-2 bg-white rounded-xl'>
                    <span className='font-semibold text-lg'>600000</span>
                    <span className='font-bold text-lg'>Coin</span>
                    <img className='w-full h-full' src={Navcoin} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;