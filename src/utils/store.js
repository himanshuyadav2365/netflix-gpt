import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice"
import movies from "./movieSlice"

const appStore=configureStore({
    reducer:{
        userSlice: user,
        movieSlice:movies,
    }
})

export default appStore