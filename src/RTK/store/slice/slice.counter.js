import {createSlice} from "@reduxjs/toolkit";

const initialState = {value: 0}
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        INCREMENT:(state)=>{
            state.value += 1;
        },
        DECREEMENT:(state)=>{
            state.value -= 1;
        },
    }
})

export const{ INCREMENT, DECREMENT} = counterSlice.actions;

export default counterSlice.reducer;