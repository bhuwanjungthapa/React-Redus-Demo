// // action
// // reducer
// // store
// // dispatcher
// // subscriber
// // action creater

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/slice.counter";

const store = configureStore({
    reducer:{
        counter: counterSlice,
    }
})
export default store;

// import { createStore } from "redux";

// function countReducer(state = { value: 5 }, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { value: state.value + 1 };
//     case "DECREMENT":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// function INCREMENT() {
//   return { type: "INCREMENT" };
// }

// function DECREMENT() {
//     return { type: "DECREMENT" };
//   }
  
// export {INCREMENT, DECREMENT}

// const store = createStore(countReducer);

// export default store;


// import userReducer from './userSlice';
// import todoReducer from './userSlice';

// const store = configureStore({
//     reducer: {
//         user: userReducer,
//         todo: todoReducer
//     }
// });

// export default store;


