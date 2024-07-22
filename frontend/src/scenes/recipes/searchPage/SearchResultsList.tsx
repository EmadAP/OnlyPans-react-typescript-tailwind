import React from 'react'
import SearchResult from './SearchResult'

const SearchResultsList = ({results}) => {
  return (
    <div className='mx-12  bg-white flex flex-col shadow-lg shadow-slate-400 rounded-xl mt-4 max-h-72 overflow-y-scroll'>
      {
        results.map((result, id: number) => {
            return <SearchResult result={result} key={id}/>
        })
      }
    </div>
  )
}

export default SearchResultsList
