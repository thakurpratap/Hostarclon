import React from "react";
import Home from "./home";
import { useOutletContext } from "react-router-dom";
import Viewvideo from "./viewVideo";

function Welcome() {
  const [movies] = useOutletContext();  // This should always give an array now
  
  console.log(movies);

  return (
    <>
      <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movies[10]?.poster_path})`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='pb-7 h-screen grid grid-cols-3'>
        <div style={{ textAlign: "left", padding: "50px", marginTop : "50%"}}>
          <h1 className="text-slate-300 pt-60 font-bold text-4xl">{movies[10]?.title}</h1>
          <h1 className="text-slate-300 mt-3">{movies[10]?.release_date}</h1>
          <h1 className="text-slate-300 mt-4">{movies[10]?.overview}</h1>
          <Viewvideo  welcomeId={movies?.id}/>
        </div>
      </div>
      <Home/>
    </>
  );
}

export default Welcome;

