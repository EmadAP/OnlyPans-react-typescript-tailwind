import React from 'react'

const SearchResult = ({ result}) => {
  return (
    <div className='py-3 px-10 hover:bg-slate-600'>
      {result.name}
    </div>
  )
}

export default SearchResult
