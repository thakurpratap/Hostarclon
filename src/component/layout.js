import React from 'react';
import Sidebar from './sidebar';  // Import the Sidebar component
import { Outlet } from 'react-router-dom';  // Use Outlet to render the current route component

function Layout({ setSearch, search, setMenu }) {
  return (
    <div className="bg-black min-h-screen flex">
      {/* Sidebar is here, and will always show */}
      <div className="w-1/12 bg-black">
        <Sidebar setSearch={setSearch} search={search} setMenu={setMenu} />
      </div>
      
      {/* Outlet will render the current route component */}
      <div className="w-11/12 bg-black">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

