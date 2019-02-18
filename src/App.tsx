import { Icon, NavBar,Button } from 'antd-mobile';
import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <NavBar
            mode="light"
            icon={<Icon type="cross" />}
            onLeftClick={() => console.log('onLeftClick')}
        >智能分诊</NavBar>
        <Button type="primary">确定</Button>
      </div>
    );
  }
}

export default App;
