import React from "react";
import { useOutletContext } from "react-router-dom";

function Movie(){
    const [movies] = useOutletContext(); // Access movies from Outlet context

return(
    <>
<div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movies[1]?.poster_path})`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='pb-7 h-screen grid grid-cols-3'>
        <div style={{ textAlign: "left", padding: "50px", marginTop : "50%"}}>
          <h1 className="text-slate-300 pt-60 font-bold text-4xl">{movies[1]?.title}</h1>
          <h1 className="text-slate-300 mt-3">{movies[1].release_date}</h1>
          <h1 className="text-slate-300 mt-4">{movies[1].overview}</h1>
          <button className="bg-gray-500 mt-10 w-60 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Watch Now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 pt-14 bg-black">
        {movies.map((data) => (
          <div key={data.id} className="rounded overflow-hidden shadow-lg mt-4 ml-4">
            <img
              className="w-full h-80"
              src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              alt="Movie Backdrop"
            />
          </div>
        ))}
      </div>
      </>
)
}

export default Movie;







// import React from "react";
// import { useOutletContext } from "react-router-dom";

// function Movie(){
//     const [movies] = useOutletContext(); // Access movies from Outlet context

//     // const filteredMovies = setSearch
//     // ? movies.filter(
//     //     (movie) => movie.title.toLowerCase().includes(setSearch.toLowerCase())
//     //   )
//     // : movies;

// return(
//     <>
// <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movies[1]?.poster_path})`,
//         backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='pb-7 h-screen grid grid-cols-3'>
//         <div style={{ textAlign: "left", padding: "50px", marginTop : "50%"}}>
//           <h1 className="text-slate-300 pt-60 font-bold text-4xl">{movies[1]?.title}</h1>
//           <h1 className="text-slate-300 mt-3">{movies[1].release_date}</h1>
//           <h1 className="text-slate-300 mt-4">{movies[1].overview}</h1>
//           <button className="bg-gray-500 mt-10 w-60 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
//             Watch Now
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-6 pt-14 bg-black">
//         {movies.map((data) => (
//           <div key={data.id} className="rounded overflow-hidden shadow-lg mt-4 ml-4">
//             <img
//               className="w-full h-80"
//               src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
//               alt="Movie Backdrop"
//             />
//           </div>
//         ))}
//       </div>
//       </>
// )
// }

// export default Movie;