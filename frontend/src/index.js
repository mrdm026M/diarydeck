import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
