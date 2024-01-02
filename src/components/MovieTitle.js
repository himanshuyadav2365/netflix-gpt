import React from 'react'

const MovieTitle = ({movieTitle,overview}) => {

  return(
        <div className='py-48 px-8 w-1/3 absolute text-white'>
            <h1 className='text-3xl font-bold py-4'>{movieTitle}</h1>
            <p>{overview}</p>
        </div>
  )
}

export default MovieTitle