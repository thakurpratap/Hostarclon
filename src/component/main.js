import React,{useState,useEffect} from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

function Main() {
  const [movies, setMovies] = useState([])

  const getmovies = async() => {
    try{
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=b16e3ccef134709edd7ba814d4e2fd75"
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
  return (
    <div className="bg-black w-full h-screen">
    <div className="flex">
      <div className="w-1/12 bg-black">
        <Sidebar />
      </div>
      <div className="w-11/12 bg-black">
        {/* Outlet will render the matched child route */}
        <Outlet context={[movies]}/>
      </div>
    </div>
  </div> 


  );
}

export default Main;