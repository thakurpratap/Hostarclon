import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function Home ({inputText}){
  let [movies] = useOutletContext();  // This should always give an array now

  if(inputText){
     movies =  movies?.filter((data)=>data?.title?.includes(inputText))
  }
   return (
   <>
     <h2 className="mt-4 ml-4 text-slate-300  font-bold text-2xl">Latet Releses</h2> 
      <div className="grid grid-cols-6 bg-black">
      {movies?.map((data)=>{
          return  <>
          <Link to = "/moviedetails" state={{data}}>
          <div key={data.id} className=" rounded overflow-hidden shadow-lg mt-4 ml-4 transition-transform duration-300 transform hover:scale-105">
        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains"/>
      </div></Link>
    </>
  })}
</div>
</>
)
}

export default Home;



