import { createSlice } from "@reduxjs/toolkit";

 const gptSlice=createSlice({
     name:"gptSlice",
     initialState:{
         showGpt:false
     },
     reducers:{
        showGPTSearchToggle:(state,action)=>{
             state.showGpt=!state.showGpt
        }
     }
 })

 export default gptSlice.reducer
 export const {showGPTSearchToggle}=gptSlice.actions