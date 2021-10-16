import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header className="bg-gray-200 w-full">
      <div className="container mx-auto justify-between">
        <nav className="flex">
          <NavLink to="/" exact className="inline-flex items-center py-6 px-3">
            Home
          </NavLink>
          <NavLink to="/permaculture" className="inline-flex items-center py-6 px-3">
            Permaculture
          </NavLink>
          <NavLink to="/about" className="inline-flex items-center py-6 px-3">
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Nav