import React, { useState } from "react";
// import Profile from "@mui/icons-material/AccountCircle";
// import Search from "@mui/icons-material/Search";
// import Home from "@mui/icons-material/Home";
// import Movies from "@mui/icons-material/Movie";
// import LiveTvIcon from '@mui/icons-material/LiveTv';
import ProfileOutlinedIcon from "@mui/icons-material/PersonOutline";
import ProfileFilledIcon from "@mui/icons-material/Person";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchFilledIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeFilledIcon from "@mui/icons-material/Home";
import MoviesOutlinedIcon from "@mui/icons-material/MovieOutlined";
import MoviesFilledIcon from "@mui/icons-material/Movie";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import LiveTvFilledIcon from "@mui/icons-material/LiveTv";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import hostaicon from '../image/dis.png'
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom"

function Sidebar() {

    const [touch, setTouch] = useState(false)

  return (
    <div className="z-20 fixed grid grid-cols-2 bg-black h-full w-28">
      <div onMouseEnter={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)}>
      <img src={hostaicon} alt="" className="ml-7 mt-5 w-40" />
      <div className="w-64 ml-5 mt-1 ">
        <span className="rounded-xl text-center" style={{backgroundColor:"rgb(74, 62, 30, 1)"}}>
          <span className="text-amber-200 ml-2 text-xs">Subcribe <span><ArrowForwardIosIcon sx={{width:"0.7rem" , marginRight:"4px"}}/></span></span>
        </span>
      </div>
        
        <div className="mt-52">
        {/* <Link to='/login'><Profile className="w-5 ml-9 mt-12 cursor-pointer text-slate-300 hover:font-bold hover:text-gray-100 hover:bg-gray-700"/></Link>
        <Link to="/search" ><Search className="w-5 ml-9 mt-12 cursor-pointer text-slate-300 hover:font-bold hover:text-gray-100 hover:bg-gray-700 "/></Link> 
        <Link to="/welcome"><Home className="w-5 ml-9 mt-12 cursor-pointer text-slate-300 hover:font-bold hover:text-gray-100 hover:bg-gray-700 "/></Link>
        <Link to="/movie"><Movies className="w-5 ml-9 mt-12 cursor-pointer text-slate-300 hover:font-bold hover:text-gray-100 hover:bg-gray-700 "/></Link>
        <Link to="/tv"><LiveTvIcon className="w-5 ml-9 mt-12 cursor-pointer text-slate-300 hover:font-bold hover:text-gray-100 hover:bg-gray-700"/></Link> */}

        <Link
          to="/login"
          className="flex flex-col items-center"
          onMouseEnter={()=> setTouch("profile")} onMouseLeave={()=> setTouch(false)}
        >
          {touch === "profile" ? (
            <ProfileFilledIcon className="w-5 cursor-pointer text-white" />
          ) : (
            <ProfileOutlinedIcon className="w-5 cursor-pointer text-gray-400 hover:text-white" />
          )}
        </Link>

        {/* Search Link */}
        <Link
          to="/search"
          className="flex flex-col items-center mt-12"
          onMouseEnter={()=> setTouch("search")} onMouseLeave={()=> setTouch(false)}
        >
          {touch === "search" ? (
            <SearchFilledIcon className="w-5 cursor-pointer text-white" />
          ) : (
            <SearchOutlinedIcon className="w-5 cursor-pointer text-gray-400 hover:text-white" />
          )}
        </Link>

        {/* Home Link */}
        <Link
          to="/welcome"
          className="flex flex-col items-center mt-12"
          onMouseEnter={()=> setTouch("home")} onMouseLeave={()=> setTouch(false)}
        >
          {touch === "home" ? (
            <HomeFilledIcon className="w-5 cursor-pointer text-white" />
          ) : (
            <HomeOutlinedIcon className="w-5 cursor-pointer text-gray-400 hover:text-white" />
          )}
        </Link>

        {/* Movies Link */}
        <Link
          to="/movie"
          className="flex flex-col items-center mt-12"
          onMouseEnter={()=> setTouch("movie")} onMouseLeave={()=> setTouch(false)}
        >
          {touch === "movie" ? (
            <MoviesFilledIcon className="w-5 cursor-pointer text-white" />
          ) : (
            <MoviesOutlinedIcon className="w-5 cursor-pointer text-gray-400 hover:text-white" />
          )}
        </Link>

        {/* TV Link */}
        <Link
          to="/tv"
          className="flex flex-col items-center mt-12"
          onMouseEnter={()=> setTouch("tv")} onMouseLeave={()=> setTouch(false)}
        >
          {touch === "tv" ? (
            <LiveTvFilledIcon className="w-5 cursor-pointer text-white" />
          ) : (
            <LiveTvOutlinedIcon className="w-5 cursor-pointer text-gray-400 hover:text-white" />
          )}
        </Link>
        </div>
      </div>

      {touch && <Fade>
      {/* <div className="text-slate-100 bg-black-900 bg-opacity-60 ml-8 w-20 h-screen font-bold text-base"> 
        <h4  style={{marginTop :"32.1vh"}} className="hover:font-bold hover:text-gray-400">My space</h4>
        <h4 className="mt-12 hover:font-bold hover:text-gray-100">Search</h4>
        <h4 className="mt-12 hover:font-bold hover:text-gray-100">Home</h4>
        <h4 className="mt-12 hover:font-bold hover:text-gray-100">Movie</h4>
        <h4 className="mt-12 hover:font-bold hover:text-gray-100">TV</h4>
      </div> */}
      <div className="text-gray-400 bg-black-900 bg-opacity-60 ml-8 w-20 h-screen font-bold text-base"> 
            <h4 style={{marginTop :"32.1vh"}} 
                className={` ${touch === "profile" ? "text-white" : "hover:text-gray-400"}`}>
              My space
            </h4>
            <h4 className={`mt-12  ${touch === "search" ? "text-white" : "hover:text-gray-400"}`}>
              Search
            </h4>
            <h4 className={`mt-12  ${touch === "home" ? "text-white" : "hover:text-gray-400"}`}>
              Home
            </h4>
            <h4 className={`mt-12 ${touch === "movie" ? "text-white" : "hover:text-gray-400"}`}>
              Movie
            </h4>
            <h4 className={`mt-12 ${touch === "tv" ? "text-white" : "hover:text-gray-400"}`}>
              TV
            </h4>
          </div>
      </Fade>}
    </div>
  );
}

export default Sidebar;
