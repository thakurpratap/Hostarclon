import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function Home ({inputText}){
  let [movies] = useOutletContext();  // This should always give an array now

  // const movies = props.movies;

  if(inputText){
    // let filteitems = movies[0].title.includes(inputText)
     movies =  movies?.filter((data)=>data?.title?.includes(inputText))
  }
   return (
    
      <div className="grid grid-cols-6 bg-black">
      {movies?.map((data)=>{
          return  <>
          <Link to = "/moviedetails" state={{data}}>
          <div key={data.id} className=" rounded overflow-hidden shadow-lg mt-4 ml-4">
        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains"/>
      </div></Link>
    </>
  })}
</div>

)
}

export default Home;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Home ({search,movies}){

// const [searchkeys,setSearchKeys ]= useState("")

//     // Check if movies is defined and is an array
//     // if (!movies || !Array.isArray(movies)) {
//     //   return <div className="text-white">No movies available.</div>;
//     // }

//    return (
// <>
// {search && 
// <input  onChange={(e)=> setSearchKeys(e.target.value)} type="text"  className=" ml-6 mt-6 h-16 bg-gray-800 border 
//          border-gray-800 text-white text-sm rounded-lg focus:ring-gray-800
//           focus:border-gray-800 block w-11/12 p-2.5 outline-none" placeholder="Movies, Shows and more" required/>
//           }
// <div className="grid grid-cols-6 bg-black">
// {movies?.filter((data)=>data?.title?.includes(searchkeys) || data?.name?.includes(searchkeys)).map((data)=>{
//     return  <>
//     <Link to = "/Moviedetails" state={{data}}>
//     <div key={data.id} className=" rounded overflow-hidden shadow-lg mt-4 ml-4">
//   <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains"/>
// </div></Link>
// </>
//   })}
// </div>
// </>
// )
// }

// export default Home;

