//import { useReducer } from "react";
// import { useState } from "react";
 import { useSelector, useDispatch } from "react-redux";
// import { initializeConnect } from "react-redux/es/components/connect";
 import { INCREMENT, DECREMENT } from "./store/slice/slice.counter";
 import {asyncIncrementByOne,asyncDecrementtByOne} from "./store/slice/slice.counter"

function App() {
 
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <>
      <div>
      <h1>RTK Store</h1>
        <h1>Count = {count}</h1>
      </div>
      <div>
        <button onClick={() => dispatch(DECREMENT())}>DECREMENT SYNC</button>
        <button onClick={() => dispatch(INCREMENT())}>INCREMENT SYNC</button>
        <br/>
        <br/>
        <button onClick={()=> dispatch(asyncIncrementByOne())}>INCREMENT ASYNC</button>
        <button onClick={()=> dispatch(asyncDecrementtByOne(count))}>DECREMENT ASYNC</button>

      </div>
    </>
  );
}

export default App;