import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useMovieData from '../hooks/useMoviePage'
import Trailer from './Trailer'

const MoviePage = () => {
    const {id}=useParams()
    const movie=useMovieData(id)
    console.log("check",movie)
  return (movie?.key && (
    <div className='h-screen w-screen bg-black flex  justify-center'>
        {/* <MovieTitle /> */}
        <Trailer movieKey={movie?.key} moviePage={true}/>
    </div>
  ))
}

export default MoviePage