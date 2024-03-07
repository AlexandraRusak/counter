import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        },

        reset: (state) => {
            state.value = 0
        },

        addValue: (state, action) => {
            state.value += Number(action.payload)
        }
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});

const { increment, decrement, reset, addValue } = counterSlice.actions;


export {
    store,
    increment,
    decrement,
    reset,
    addValue
};