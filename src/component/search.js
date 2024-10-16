import React, { useState } from "react";
import Home from "./home";
import SearchIcon from '@mui/icons-material/Search';

function Search(){
    const [inputText, setInputText] = useState("");
  
    const handelsearch = (e) => {
        // 👇 Store the input value to local state
        setInputText(e.target.value);
        console.log(inputText, "serch")
    };

return(
    <>
    <div className="mt-10">
<form>   
    <div className="relative">
    <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        <input  type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
         dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Movie show and more" value={inputText}  onChange={handelsearch} required />
    </div>
</form>
</div>
<Home inputText={inputText}/>
</>
)
    
}

export default Search;