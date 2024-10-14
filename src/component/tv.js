import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Tv (){
    const [movies, setMovies] = useState([])

    const getmovies = async() => {
      try{
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/tv?api_key=b16e3ccef134709edd7ba814d4e2fd75"
        );
        const data = await response.json();
        setMovies(data.results);
        // setMoviesProp(data.results);
      }catch(err){
        console.error(err)
      }
  }
  useEffect(()=>{
      getmovies();
  },[])
    return(
<>

<div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movies[10]?.poster_path})`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='pb-7 h-screen grid grid-cols-3'>
        <div style={{ textAlign: "left", padding: "50px", marginTop : "50%"}}>
          <h1 className="text-slate-300 pt-60 font-bold text-4xl">{movies[10]?.original_name}</h1>
          <h1 className="text-slate-300 mt-3">{movies[10]?.first_air_date}</h1>
          <h1 className="text-slate-300 mt-4">{movies[10]?.overview}</h1>
          <button className="bg-gray-500 mt-10 w-60 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Watch Now
          </button>
        </div>
      </div>

        <div className="grid grid-cols-6 bg-black">
        {movies.map((data)=>{
            return  <>
            <Link to = "/moviedetails" state={{data}}>
            <div key={data.id} className=" rounded overflow-hidden shadow-lg mt-4 ml-4">
          <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains"/>
        </div></Link>
        </>
          })}
        </div>
        </>
    )
}

export default Tv;









// import React,{useState, useEffect} from "react";

// function Tv (){
//     const [movies, setMovies] = useState([])

//     // const filteredMovies = movies.filter((movie) =>
//     //     movie.original_name.toLowerCase().includes(searchTerm.toLowerCase())
//     //   );

//     const getmovies = async() => {
//       try{
//         const response = await fetch(
//           "https://api.themoviedb.org/3/discover/tv?api_key=b16e3ccef134709edd7ba814d4e2fd75"
//         );
//         const data = await response.json();
//         setMovies(data.results);
//         // setMoviesProp(data.results);
//       }catch(err){
//         console.error(err)
//       }
//   }
//   useEffect(()=>{
//       getmovies();
//   },[])
//     return(
// <>

// <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${movies[7]?.poster_path})`,
//         backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='pb-7 h-screen grid grid-cols-3'>
//         <div style={{ textAlign: "left", padding: "50px", marginTop : "50%"}}>
//           <h1 className="text-slate-300 pt-60 font-bold text-4xl">{movies[10]?.original_name}</h1>
//           <h1 className="text-slate-300 mt-3">{movies[10]?.first_air_date}</h1>
//           <h1 className="text-slate-300 mt-4">{movies[10]?.overview}</h1>
//           <button className="bg-gray-500 mt-10 w-60 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
//             Watch Now
//           </button>
//         </div>
//       </div>

//         <div className="grid grid-cols-6 bg-black">
//         {movies.map((data)=>{
//             return  <>
//             <div key={data.id} className=" rounded overflow-hidden shadow-lg mt-4 ml-4">
//           <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains"/>
//         </div>
//         </>
//           })}
//         </div>
//         </>
//     )
// }

// export default Tv;