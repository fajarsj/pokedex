import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./styles/index.scss";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./app";
import pokemonReducer from "./store/reducers/pokemon";

const composeEnhancers = null || compose;

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("App")
);
registerServiceWorker();
