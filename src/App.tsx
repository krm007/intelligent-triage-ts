import React, { Component } from "react";
import './App.css';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routerConfigs from "./router/routerConfigs";
import JssProvider from "react-jss/lib/JssProvider";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import jssPreset from "@material-ui/core/styles/jssPreset";
import { create } from "jss";

/**
 * 使用material-ui的jss in js 解决方案
 */
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

class App extends Component {
  public render() {
    return (
      <div className="App">
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <HashRouter>{renderRoutes(routerConfigs)}</HashRouter>
        </JssProvider>
      </div>
    );
  }
}

export default App;
