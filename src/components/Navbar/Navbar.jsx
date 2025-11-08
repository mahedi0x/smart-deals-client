import React, { use } from 'react';
// import { FaAppStoreIos, FaGithub, FaHome } from 'react-icons/fa';
// import { MdInstallDesktop } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }


    const links = <>
           <li> <NavLink to='/' className="font-bold ">Home</NavLink></li>
           <li><NavLink to='/allProducts' className="font-bold">All Products</NavLink> </li>
           {/* <li><NavLink to='/register' className="font-bold">Register</NavLink> </li> */}
           {
            user && <>
            <li><NavLink to='/myProducts' className="font-bold">My Products</NavLink> </li>
            <li><NavLink to='/myBids' className="font-bold">My Bids</NavLink> </li>
            
            </>
           }
           </>


    return (
        <div className="navbar bg-base-100 shadow-sm px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
                {
                    links
                }
             
            </ul>
          </div>
          <NavLink to="/" className=" text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">Smart Deals</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className='menu menu-horizontal '>
            {
                links
            }
          </ul>
        </div>
        <div className="navbar-end">
        <div className="navbar-end">
                {
                    user ?
                        <a onClick={handleSignOut} className="btn btn-primary">Sign Out</a> :
                        <Link to="/login" className="btn w-1/2 text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">Login</Link>
                }
            </div>
        </div>
      </div>
    )
  }
  
  export default Navbar