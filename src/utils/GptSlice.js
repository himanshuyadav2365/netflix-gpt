import { createSlice } from "@reduxjs/toolkit";

 const gptSlice=createSlice({
     name:"gptSlice",
     initialState:{
         showGpt:false,
         gptMovies:[],
         gptMovieTitle:[],
         loading:false
     },
     reducers:{
        showGPTSearchToggle:(state,action)=>{
             state.showGpt=!state.showGpt
        },

        addGPTMovie:(state,action)=>{
            const {movies,title}=action.payload
            state.gptMovies=movies
            state.gptMovieTitle=title
        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        }
     }
 })

 export default gptSlice.reducer
 export const {showGPTSearchToggle,addGPTMovie,setLoading}=gptSlice.actions