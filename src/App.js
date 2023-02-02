import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT } from "./store";

function App() {
  const [count , setCount] = useState(0);
    // const count = useSelector((state) => state.value);
    // const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Count = {count}</h1>
      </div>
      <div>
        <button onClick={() => setCount(count-1)}>DECREMENT</button>
        <button onClick={() => setCount(count+1)}>INCREMENT</button>
      </div>
    </>
  );
}

export default App;