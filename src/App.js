
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Signin from "./component/signin";
import Welcome from "./component/welcome";
import Search from "./component/search";
import Movie from "./component/movie";
import Main from "./component/main";
import Login from "./component/login";
import Tv from "./component/tv";
import Moviedetails from "./component/movieDetails";

function App() {
  return (
    <div>
         <BrowserRouter>
        <Routes>
        <Route path="/"  element={<Main />}>
          <Route index element={<Navigate to="welcome" replace />} />
          <Route path="login" exact element={<Login/>}/>
          <Route path="signin" exact element={<Signin />} />
          <Route path="welcome" exact element={<Welcome />} />
          <Route path="search" exact element={<Search />} />
          <Route path="movie" exact element={<Movie />} />
          <Route path="tv" exact element={<Tv />} />
          <Route path="/moviedetails" exact element={<Moviedetails />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import "./App.css";
// import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// import Signin from "./component/signin";
// // import Welcome from "./component/welcome";
// // import Search from "./component/search";
// // import Movie from "./component/movie";
// import Main from "./component/main";
// import Login from "./component/login";
// import Moviedetails from "./component/movieDetails";
// import Sidebar from "./component/sidebar";
// import Layout from "./component/layout";
// import { useState } from "react";
// // import Tv from "./component/tv";

// function App() {

//   const [search, setSearch] = useState(false);
//   const [menu, setMenu] = useState("");


//   return (
//     <div>
//          <BrowserRouter>
      
//         {/* <Sidebar /> */}
//         <Routes>
//           {/* <Route index element={<Navigate to="/" replace />} /> */}
//           <Route 
//           path="/" 
//           element={<Layout setSearch={setSearch} search={search} setMenu={setMenu} />} 
//         >
//           <Route path="/login" exact element={<Login/>}/>
//           {/* <Route path="/" exact element={<Main />}/> */}
//          <Route index  element={<Main search={search} setSearch={setSearch} menu={menu} setMenu={setMenu}/>}  />
//           <Route path="/signin" exact element={<Signin />} />
//           <Route path="/moviedetails" exact element={<Moviedetails />} />
//         </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
