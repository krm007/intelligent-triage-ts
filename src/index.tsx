import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import { BgWordsAndSymptoms, MyFeatureList } from "./mobx/allExport";

/** 创建实例 */
const applicationState = new MyFeatureList();
const bgWordsAndSymptoms = new BgWordsAndSymptoms();
const state = {
  store: applicationState,
  changeState: bgWordsAndSymptoms
};
ReactDOM.render(
  <Provider {...state}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
