"use client";

import React from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4  pt-3 pb-3">
          <div className="text-2xl font-bold">YOUR LOGO</div>
          <div className="relative">
            <input
              type="text"
              placeholder="Type in and hit Enter"
              className="border border-gray-400 rounded-full py-2 px-4 w-96"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <span>Cart</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUser />
            <span>User</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>   عربىع</span>
          </div>
        </div>
      </div>
      <nav className="bg-white">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex space-x-8">
            <a href="#" className="hover:underline">ALL BRANDS</a>
            <a href="#" className="hover:underline">SKINCARE</a>
            <a href="#" className="hover:underline">MAKE UP</a>
            <a href="#" className="hover:underline">HAIR CARE</a>
            <a href="#" className="hover:underline">BATH & BODY</a>
            <a href="#" className="hover:underline">BEAUTY SUPPLEMENTS</a>
            <a href="#" className="hover:underline">PROMOS</a>
          </div>
          <a href="#" className="bg-black text-white py-2 px-4 border rounded">SELL WITH US</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
