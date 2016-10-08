import React, { Component } from 'react';
import SideBar from './Components/SideBar';
import MainBar from './Components/MainBar/MainBar';

class App extends Component {
  render() {
    return (
      <div className="cutom-container">
        <div className="row">
          <SideBar />
          <MainBar />
        </div>
      </div>
    );
  }
}

export default App;
