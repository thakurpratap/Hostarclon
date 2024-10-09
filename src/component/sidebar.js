import React, { useState } from "react";
import Profile from "@mui/icons-material/AccountCircle";
import Search from "@mui/icons-material/Search";
import Home from "@mui/icons-material/Home";
import Movies from "@mui/icons-material/Movie";
// import icon from '../image/icon.png'
import icon from '../image/disney.png'
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom"


function Sidebar() {

    const [touch, setTouch] = useState(false)

  return (
    <div className="z-20 fixed grid grid-cols-2 bg-black h-full w-28">
      <div onMouseEnter={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)}>
        <img src={icon} alt='' className="ml-7 mt-5 w-40" />
        <Link to='/login'><Profile className="w-5 ml-9 mt-8 cursor-pointer text-white"/></Link>
        <Link to="/search" ><Search className="w-5 ml-9 mt-8 cursor-pointer text-white"/></Link> 
        <Link to="/welcome"><Home className="w-5 ml-9 mt-8 cursor-pointer text-white"/></Link>
        <Link to="/movie"><Movies className="w-5 ml-9 mt-8 cursor-pointer text-white"/></Link>
      </div>
      {/* bg-black  */}
      {touch && <Fade><div className="text-slate-300 bg-black-900 bg-opacity-60 ml-8 w-20 h-screen font-bold text-base"> 
        <h4 className="mt-20">My space</h4>
        <h4 className="mt-8">Search</h4>
        <h4 className="mt-9">Home</h4>
        <h4 className="mt-8">Movie</h4>
      </div></Fade>}
    </div>
  );
}

export default Sidebar;
