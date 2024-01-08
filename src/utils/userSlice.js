import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:"user",
    initialState:{
        user:null,
        preferredlanguage:"en"
    },
    reducers:{
        addUser:(state,action)=>{
            state.user= action.payload
        },

        removeUser:(state)=>{
            state.user= null
        },
        selectLang:(state,action)=>{
            state.preferredlanguage=action.payload
        }
    }
})

export default user.reducer
export const {addUser,removeUser,selectLang}=user.actions