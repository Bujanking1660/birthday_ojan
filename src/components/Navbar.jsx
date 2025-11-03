import React from "react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center items-center absolute top-4 z-10">
    <nav className="w-96 h-16 border-2 rounded-full overflow-hidden">
      <div className="w-full h-full bg-linear-to-r from-[#F3C623] via-[#EB8317] to-[#F3C623] animate-gradient-x text-center flex items-center justify-between px-4 shadow shadow-black/30 ">
        <div></div>
        <h1 className="text-center text-black font-bold text-lg">Birthday Letter</h1>
        <div className="HumburgerMenu cursor-pointer text-black" onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </div>
      </div>

      <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-20
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-lg font-bold text-gray-800">Menu</h2>
            <HiX
              className="cursor-pointer"
              size={24}
              onClick={() => setOpen(false)}
            />
          </div>

          <img onClick={() => setOpen(false)} src="/gradasi.jpg" alt="Bg" className='w-full h-500 fixed inset-0 object-cover'/>
          <ul className="flex flex-col gap-3 p-4 text-gray-700 z-20 relative">
            <li className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
              Home
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
              About
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
    </nav>
    </div>
  );
};

