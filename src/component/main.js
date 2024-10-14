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







// import React, { useState, useEffect } from "react";
// import Sidebar from "./sidebar";
// import Home from "./home";
// import Welcome from "./welcome";
// import { useLocation } from "react-router-dom";

// function Main({menu , search}) {
//   const [movies, setMovies] = useState([]);

//   // const location = useLocation();  // Access props passed via React Router's state
//   // const { search, menu } = location.state;

//   // const [search, setSearch] = useState(false);
//   // const [menu, setMenu] = useState(""); 

//   const getmovies = async () => {
//   //   try {
//   //     const response = await fetch(
//   //       menu === "home" || menu === ""
//   //         ? `https://api.themoviedb.org/3/movie/upcoming?api_key=b16e3ccef134709edd7ba814d4e2fd75`
//   //         : `https://api.themoviedb.org/3/discover/${menu ? menu : "movie"}?api_key=b16e3ccef134709edd7ba814d4e2fd75`
//   //     );
//   //     const data = await response.json();
//   //     setMovies(data.results);
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };


//   try {
//     let url = "";
//     if (menu === "home") {
//       // Fetch upcoming movies for the "Home" page
//       url = `https://api.themoviedb.org/3/movie/upcoming?api_key=b16e3ccef134709edd7ba814d4e2fd75`;
//     } else if (menu === "movie") {
//       // Fetch discovered movies for the "Movie" page
//       url = `https://api.themoviedb.org/3/discover/movie?api_key=b16e3ccef134709edd7ba814d4e2fd75`;
//     } else if (menu === "tv") {
//       // Fetch discovered TV shows for the "TV" page
//       url = `https://api.themoviedb.org/3/discover/tv?api_key=b16e3ccef134709edd7ba814d4e2fd75`;
//     }
//     const response = await fetch(url);
//     const data = await response.json();
//     setMovies(data.results);
//   } catch (err) {
//     console.error(err);
//   }
// };

//   useEffect(() => {
//     getmovies();
//   }, [menu]);

//   return (
//     <div className="bg-black min-h-screen">
//       <div className="flex h-full">
//         {/* <div className="w-1/12 bg-black">
//           <Sidebar setSearch={setSearch} search={search} setMenu={setMenu} />
//         </div> */}
//         {!search && 
//           <div className="w-11/12 bg-black">
//             <Welcome  movies={movies[10]} />
//           </div>
//         }
//       </div>
//       <div className="bg-black ml-24">
//         <Home search={search} movies={movies}  />
//       </div>
//     </div>
//   );
// }

// export default Main;
