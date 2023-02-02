import React from "react";
import ReactDOM from "react-dom/client";
//import OApp from "./App";
import App from "./RTK/App";

import { Provider } from "react-redux";
// import store from "./storeRTK";
import store from "./RTK/store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

