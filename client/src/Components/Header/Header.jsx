import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header= () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
    <nav className="bg-slate-900 p-4">
      <div className="container mx-auto flex md:justify-around justify-between items-center">
        {/* Left side - YouTube text */}
        <Link to="/" className="text-white text-xl font-bold hover:text-slate-300">YouTube To Mp3</Link>

        {/* Right side - Links (visible on desktop) */}
        <div className="hidden md:flex space-x-6  font-medium">
          <Link to="/"  className="text-white hover:text-slate-300">Home</Link>
          <HashLink  to="/#description" smooth className="text-white hover:text-slate-300">About Product</HashLink>
          <HashLink to="/#How-it-works" smooth className="text-white hover:text-slate-300">How It Works</HashLink>
          <HashLink   to="/FAQ" smooth className="text-white hover:text-slate-300">FAQs</HashLink>
        </div>

        {/* Hamburger menu (visible on mobile) */}
        <div className="md:hidden ">
          <button onClick={toggleMobileMenu} className="text-white ">
            <MenuOutlinedIcon></MenuOutlinedIcon>
          </button>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className={`md:hidden ${showMobileMenu ? '' : 'hidden'}`}>
        <Link to="/" className="block text-white mb-2 hover:text-slate-300">Home</Link>
        <HashLink to="/#description" smooth className="block text-white mb-2 hover:text-slate-300">About Product</HashLink>
        <HashLink to="/#How-it-works" smooth className="block text-white mb-2 hover:text-slate-300">How It Works</HashLink>
        <HashLink to="/FAQ" smooth className="block text-white hover:text-slate-300">FAQs</HashLink>
      </div>
    </nav>
    <Outlet></Outlet>
    </>
  );
};

export default Header;
