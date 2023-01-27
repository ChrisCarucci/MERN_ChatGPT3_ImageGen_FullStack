import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelChoice: "ada",
}

export const modelChoiceSlice = createSlice({
    name: 'chooseModel',
    initialState,
    reducers: {
        setChoice: (state, action) => {
            state.choice = action.payload
        },
    },
});

export const { setChoice } = modelChoiceSlice.actions;
export default modelChoiceSlice.reducer;