import React from "react";
import { useLocation } from "react-router-dom";
import Viewvideo from "./viewVideo";

function Moviedetails (){
    const location = useLocation();
    console.log(location);

    return(
        <>
        <div
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${location?.state?.data?.poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="pb-7 h-screen grid grid-cols-3"
      >
        <div style={{ textAlign: "left", padding: "50px", marginTop: "50%" }}>
          <h1 className="text-slate-300 pt-60 font-bold text-4xl">
            {location?.state?.data?.title}
          </h1>
          <h1 className="text-slate-300 mt-3">{location?.state?.data?.release_date}</h1>
          <h1 className="text-slate-300 mt-4">{location?.state?.data?.overview}</h1>
         <Viewvideo detailsId={location?.state?.data?.id}/>
        </div>
      </div> 
        </>
    )
}

export default Moviedetails;

