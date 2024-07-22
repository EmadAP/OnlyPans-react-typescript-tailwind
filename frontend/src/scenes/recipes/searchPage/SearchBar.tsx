import  { useState } from 'react'
import { FaSearch } from "react-icons/fa"



function SearchBar({setResults}) {
  const [input, setInput] = useState("");
  

  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response  => response.json())
    .then((json) => {
      const results = json.filter((user: { name: string; }) => {
        return(
          value &&
          user &&
          user.name &&
          user.name.toLowerCase().includes(value)
        );
      });
      setResults(results)
    });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  }
  return (
    <div className='mx-12 bg-white  rounded-xl h-10  px-4 shadow-md shadow-slate-400 flex ' >
      <FaSearch className='text-orange-600 m-auto' />
      <input placeholder='Type to Search...' className=' bg-transparent border-none h-full text-lg w-full ml-2 focus:outline-none' value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
     
  )
}

export default SearchBar
