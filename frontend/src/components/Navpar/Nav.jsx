import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img5 from '../../assets/logo.png';
import { useSelector } from 'react-redux';
import AdminHomePage from '../../pages/admin/AdminHomePage';

function Nav() {
    const { currentRole } = useSelector(state => state.user);
  
if(currentRole===null){return<nav className="fixed top-0 left-0 right-0 z-20 border-b border-gray-500 bg-[#06213F] text-white py-4">
  <div className="bg-[#06213F] flex justify-between container m-auto py-2 text-right text-sm">
    <h1 className="text-2xl flex font-bold">
      <img src={img5} alt="f" width={35} height={35} />
      Cairo International School
    </h1>
    <ul className="inline-flex space-x-2 text-lg items-center">
      <li className="border-r border-white pr-2">
        <Link to="/" className="text-[#F9F9F9] hover:text-[#55ABDA]">
          Home
        </Link>
      </li>
      <li className="border-r border-white pr-2">
        <Link to="contact" className="text-[#F9F9F9] hover:text-[#55ABDA]">
          Contact Us
        </Link>
      </li>
      <li className="border-r border-white pr-2">
        <Link
          target="planck"
          to="https://me.classera.com"
          className="text-[#F9F9F9] hover:text-[#55ABDA]"
        >
          Classera
        </Link>
      </li>
      <li className="border-r border-white pr-2">
        <Link to="Studentlogin" className="text-[#F9F9F9] hover:text-[#55ABDA]">
          Student Login
        </Link>
      </li>
      <li className="border-r border-white pr-2">
        <Link to="Adminlogin" className="text-[#F9F9F9] hover:text-[#55ABDA]">
          Admin Login
        </Link>
      </li>
      <li>
        <Link to="Teacherlogin" className="text-[#F9F9F9] hover:text-[#55ABDA]">
          Staff Login
        </Link>
      </li>
    </ul>
  </div>
  <div className="container flex justify-center items-center px-8 py-2">
    <ul className="flex bg-white py-2 font-bold text-[#06213F] w-[50%] rounded-lg justify-center space-x-16">
      <li>
        <Link to="activities" className="hover:text-[#55ABDA] transition-colors">
          Activities
        </Link>
      </li>
      <li>
        <Link to="application" className="hover:text-[#55ABDA] transition-colors">
          Application
        </Link>
      </li>
      <li className="group relative">
        <Link to="#" className="hover:text-[#55ABDA] transition-colors">
          Grade
        </Link>
        <ul className="absolute hidden group-hover:block bg-white text-[#06213F] py-2 px-4 rounded-lg shadow-lg z-50">
          <li>
            <Link to="#" className="block hover:text-[#55ABDA] transition-colors whitespace-nowrap">
              Grade 1
            </Link>
          </li>
          <li>
            <Link to="#" className="block hover:text-[#55ABDA] transition-colors whitespace-nowrap">
              Grade 2
            </Link>
          </li>
          <li>
            <Link to="#" className="block hover:text-[#55ABDA] transition-colors whitespace-nowrap">
              Grade 3
            </Link>
          </li>
        </ul>
      </li>
      <li className="group relative">
        <Link to="nursery" className="hover:text-[#55ABDA] transition-colors">
          Nursery
        </Link>
        <ul className="absolute hidden group-hover:block bg-white text-[#06213F] py-2 px-4 rounded-lg shadow-lg z-50">
          <li>
            <Link to="#" className="block hover:text-[#55ABDA] transition-colors whitespace-nowrap">
              Nursery A
            </Link>
          </li>
          <li>
            <Link to="#" className="block hover:text-[#55ABDA] transition-colors whitespace-nowrap">
              Nursery B
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>}
  return ''
}

export default Nav;