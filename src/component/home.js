import React from "react";
import { useOutletContext } from "react-router-dom";

function Home (){
  const [movies] = useOutletContext();  // This should always give an array now

  // const movies = props.movies;
  console.log(movies);
   return (
<div className="grid grid-cols-6 bg-black">
{movies.map((data)=>{
    return  <>
    <div key={data.id} className=" rounded overflow-hidden shadow-lg mt-4 ml-4">
  <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains"/>
</div>
</>
  })}
</div>

)
}

export default Home;