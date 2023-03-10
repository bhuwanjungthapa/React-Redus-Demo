import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { decrementByOne, incrementByOne } from "../../../asyncFunc";

const initialState = {value: 0}
const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        INCREMENT:(state)=>{
            state.value += 1;
        },
        DECREMENT:(state)=>{
            if(state.value >0)
            state.value -= 1;
        }
    },
        extraReducers:(builder)=>{
            builder
            .addCase(asyncIncrementByOne.fulfilled,(state,action)=>{
                state.value = action.payload.value;
            })
            .addCase(asyncIncrementByOne.pending,(state,action)=>{
                state.value = "Loading...";
            })
            .addCase(asyncDecrementtByOne.fulfilled,(state,action)=>{
                state.value = action.payload.value;
            })
            .addCase(asyncDecrementtByOne.pending,(state,action)=>{
                state.value = "Loading...";
            })
        }
});
export const asyncIncrementByOne = createAsyncThunk(
    'counter/incrementByOne',
    async () => {
        const respose = await incrementByOne();
        return {value: respose};
    }
)

export const asyncDecrementtByOne = createAsyncThunk(
    'counter/decrementByOne',
    async (count) => {
        const respose = await decrementByOne(count);
        return {value: respose};
    }
)

export const{ INCREMENT, DECREMENT} = counterSlice.actions;

export default counterSlice.reducer;