import { configureStore } from "@reduxjs/toolkit";
import Theme from '../reducers/Theme'
import Language from "../reducers/Language";



export const store = configureStore({
    reducer:{
        theme: Theme,
        language: Language
    }
})