import React, { useEffect, useState } from "react";

function Home ({setPoster}){

  const [movies, setMovies] = useState([])

    const getmovies = async() => {
        try{
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=b16e3ccef134709edd7ba814d4e2fd75"
      );
      const data = await response.json();
      setMovies(data.results);
      
      // Set the first movie poster path
      if (data.results && data.results.length > 0) {
        setPoster(data.results[15].poster_path);
      }
        }catch(err){
          console.error(err)
        }
    }

    console.log(movies)

    useEffect(()=>{
        getmovies();
    },[movies])

    return (

<div className="grid grid-cols-6 bg-black">
{movies.map((data)=>{
    return  <>
    <div className=" rounded overflow-hidden shadow-lg mt-4 ml-4">
  <img className="w-full" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains"/>
</div>
</>
  })}
</div>

)
}

export default Home;
