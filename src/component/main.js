import React from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="bg-black w-full h-screen">
    <div className="flex">
      <div className="w-1/12 bg-black">
        <Sidebar />
      </div>
      <div className="w-11/12 bg-black">
        {/* Outlet will render the matched child route */}
        <Outlet />
      </div>
    </div>
  </div> 
  );
}

export default Main;
