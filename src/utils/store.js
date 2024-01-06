import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice"
import movies from "./movieSlice"
import GptSlice from "./GptSlice";

const appStore=configureStore({
    reducer:{
        userSlice: user,
        movieSlice:movies,
        gptSlice:GptSlice,
    }
})

export default appStore