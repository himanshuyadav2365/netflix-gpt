import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice"

const appStore=configureStore({
    reducer:{
        userSlice: user,
    }
})

export default appStore