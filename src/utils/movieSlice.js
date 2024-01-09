import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        movieList:null,
        nowPlaying:null,
        trailerVideo:null,
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movieList=action.payload
        },
        addNowPlayingMovies:(state,action)=>{
            state.nowPlaying=action.payload
        },
        addTrailer:(state,action)=>{
          state.trailerVideo=action.payload
        }
    }
})

export default movieSlice.reducer
export const {addMovies,addTrailer,addNowPlayingMovies} = movieSlice.actions