import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import Viewvideo from "./viewVideo";

function Movie(){
    const [movies] = useOutletContext();

return(
    <>
   
<div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movies[1]?.poster_path})`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='pb-7 h-screen grid grid-cols-3'>
        <div style={{ textAlign: "left", padding: "50px", marginTop : "50%"}}>
          <h1 className="text-slate-300 pt-60 font-bold text-4xl">{movies[1]?.title}</h1>
          <h1 className="text-slate-300 mt-3">{movies[1].release_date}</h1>
          <h1 className="text-slate-300 mt-4">{movies[1].overview}</h1>
          <Viewvideo detailsId={movies?.state?.data?.id}/>
        </div>
      </div>

      <h2 className="mt-4 ml-4 text-slate-300  font-bold text-2xl">Movies in India</h2>
      <div className="grid grid-cols-6  bg-black">
        {movies.map((data) => (
            <Link to = "/moviedetails" state={{data}}>
          <div key={data.id} className="rounded overflow-hidden shadow-lg mt-4 ml-4 transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-80"
              src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              alt="Movie Backdrop"
            />
          </div></Link>
        ))}
      </div>
      </>
)
}

export default Movie;