import { createSlice } from "@reduxjs/toolkit";

 const gptSlice=createSlice({
     name:"gptSlice",
     initialState:{
         showGpt:false,
         gptMovies:[]
     },
     reducers:{
        showGPTSearchToggle:(state,action)=>{
             state.showGpt=!state.showGpt
        },

        addGPTMovie:(state,action)=>{
            state.gptMovies=action.payload
        }
     }
 })

 export default gptSlice.reducer
 export const {showGPTSearchToggle,addGPTMovie}=gptSlice.actions