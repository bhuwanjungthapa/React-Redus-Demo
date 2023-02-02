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
        },
    }
});
export const asyncIncrementByOne = createAsyncThunk(
    'counter/incrementByOne',
    async () => {
        const respose = await incrementByOne();
        return {value: respose};
    }
)

// export const asyncDecrementtByOne = createAsyncThunk(
//     'counter/decrementByOne',
//     async () => {
//         const respose = await decrementByOne();
//         return {value: respose};
//     }
// )

export const{ INCREMENT, DECREMENT} = counterSlice.actions;

export default counterSlice.reducer;