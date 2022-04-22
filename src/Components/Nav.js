import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="w-full">
      <div className="container flex w-full">
        <nav className="flex-col  w-full justify-start text-md lg:text-2xl">
          <div class='flex justify-start w-full px-4'>
            <NavLink to="/" exact className="inline-flex items-center py-3 px-1">
              Home |
            </NavLink>
            <NavLink to="/about" className="inline-flex items-center py-3 px-1">
              About |
            </NavLink>
            <NavLink to="/services" className="inline-flex items-center py-3 px-1">
              Services |
            </NavLink>
            <NavLink to="/gallery" className="inline-flex items-center py-3 px-1">
              Gallery |
            </NavLink>
            <NavLink to="/contact" className="inline-flex items-center py-3 px-1">
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Nav