import { configureStore } from "@reduxjs/toolkit";
import Theme from '../reducers/Theme'



export const store = configureStore({
    reducer:{
        theme: Theme
    }
})