import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    instructions: {},
};

const instructionSlice = createSlice({
    name: "instruction",
    initialState,
    reducers: {
        setInstructions(state, action) {
            state.instructions = action.payload;

            console.log("instructions =", action.payload);
        },
    },
});

export const { setInstructions } = instructionSlice.actions;
export default instructionSlice.reducer;
