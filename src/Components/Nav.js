import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="w-full">
      <div className="container flex justify-start">
        <nav className="flex-col">
          <div>
            <NavLink to="/" exact className="inline-flex items-center py-6 px-3 ml-4">
              Home
            </NavLink>
            <NavLink to="/about" className="inline-flex items-center py-6 px-3">
              About
            </NavLink>
            <NavLink to="/services" className="inline-flex items-center py-6 px-3">
              Services
            </NavLink>
            <NavLink to="/gallery" className="inline-flex items-center py-6 px-3">
              Gallery
            </NavLink>
            {/* <NavLink to="/contact" className="inline-flex items-center py-6 px-3">
              Contact
            </NavLink> */}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Nav