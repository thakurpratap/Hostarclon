import React from 'react';
import Sidebar from './sidebar';  
import { Outlet } from 'react-router-dom';  

function Layout({ setSearch, search, setMenu }) {
  return (
    <div className="bg-black min-h-screen flex">
      <div className="w-1/12 bg-black">
        <Sidebar setSearch={setSearch} search={search} setMenu={setMenu} />
      </div>
      
      <div className="w-11/12 bg-black">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

