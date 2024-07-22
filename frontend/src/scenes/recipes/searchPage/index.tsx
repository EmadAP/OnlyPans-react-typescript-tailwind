import { useState } from "react";
import SearchBar from "./SearchBar"
import SearchResultsList from "./SearchResultsList";



function SearchPage() {
    const [results, setResults] = useState([]);

  return (
    <div>
        <div>
         <h1 className='text-center py-10 basis-3/5 font-montserrat text-3xl font-bold' >Search for recipes</h1>
         <SearchBar setResults={setResults}/>
         <SearchResultsList results={results}/>
        </div>
    </div>
  )
}

export default SearchPage
