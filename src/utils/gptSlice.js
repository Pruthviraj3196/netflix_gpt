import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: false
    },
    reducers:{
        toggleFptSearchView:(state) => {
            state.showGptSearch = !state.showGptSearch;
        },
    }
})

export const { toggleFptSearchView } = gptSlice.actions;

export default gptSlice.reducer;