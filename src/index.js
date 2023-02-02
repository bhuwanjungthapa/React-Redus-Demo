import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import App from "./App1";

import { Provider } from "react-redux";
// import store from "./storeRTK";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);