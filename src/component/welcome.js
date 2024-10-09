import React,{useState} from "react";
import img from '../image/Bigg_Boss.png';
import Home from "./home";

function Welcome() {

  const [poster, setPoster] = useState(""); 
  
  return (
    <>
      
      <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${img}`,
        backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='pb-7 h-screen grid grid-cols-3'> 
        <div style={{ textAlign: "left", padding: "50px", marginTop : "50%"}}>
          <h1 className="text-slate-300 pt-60 font-bold text-4xl">Bigg_Boss</h1>
          <h1 className="text-slate-300 mt-3">2024 . Hindi</h1>
          <h1 className="text-slate-300 mt-4">The greatest reality show is back with a new boss! join vijay sethupathi for a season loaded with surprise, drama and endless entertainment</h1>
          <button className="bg-gray-500 mt-10 w-60 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Watch Now
          </button>
        </div>
      </div>
      <Home setPoster={setPoster}/>
    </>
  );
}

export default Welcome;
