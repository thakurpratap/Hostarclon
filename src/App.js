import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signin from "./component/signin";
import Welcome from "./component/welcome";
import Search from "./component/search";
import Movie from "./component/movie";
import Main from "./component/main";
import Login from "./component/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Main /> */}
        <Routes>
        <Route path="/" exact element={<Main />}>
        <Route path="/login" exact element={<Login/>}/>
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/welcome" exact element={<Welcome />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/movie" exact element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
