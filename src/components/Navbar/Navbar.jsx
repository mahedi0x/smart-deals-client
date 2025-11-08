import React from 'react';
// import { FaAppStoreIos, FaGithub, FaHome } from 'react-icons/fa';
// import { MdInstallDesktop } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"

const Navbar = () => {

    const links = <>
           <li> <NavLink to='/' className="font-bold">Home</NavLink></li>
           <li><NavLink to='/allProducts' className="font-bold">All Products</NavLink> </li>
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
        <a href="https://github.com/mahedi0x" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 text-sm font-medium text-white">
        {/* <FaGithub /> */}
        <span>Contribute</span></a>
        </div>
      </div>
    )
  }
  
  export default Navbar