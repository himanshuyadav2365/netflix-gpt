import { createSlice } from "@reduxjs/toolkit";

 const gptSlice=createSlice({
     name:"gptSlice",
     initialState:{
         showGpt:false,
         gptMovies:[],
         gptMovieTitle:[],
     },
     reducers:{
        showGPTSearchToggle:(state,action)=>{
             state.showGpt=!state.showGpt
        },

        addGPTMovie:(state,action)=>{
            const {movies,title}=action.payload
            state.gptMovies=movies
            state.gptMovieTitle=title
        }
     }
 })

 export default gptSlice.reducer
 export const {showGPTSearchToggle,addGPTMovie}=gptSlice.actions