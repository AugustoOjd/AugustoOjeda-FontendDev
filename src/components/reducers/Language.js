import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: 'language',
    initialState: {value: true},
    reducers: {
        traslate: (state) =>{
            state.value = !state.value
        }
    }
})

export const {traslate} = languageSlice.actions
export default languageSlice.reducer;