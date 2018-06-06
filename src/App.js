import React, { Component } from 'react';
// uncomment the following line for route
// import { Route } from 'react-router-dom'
import Navbar from './Components/navbar'

class App extends Component {
  state = {
  }
  render() {
    return (
      <div>
        <h1>YAQEEN</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;
