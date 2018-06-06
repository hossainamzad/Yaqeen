import React, { Component } from 'react';
import Navbar from './Components/navbar'

class App extends Component {
  state = {
    screen: 'navbar'
  }
  render() {
    return (
      <div>
        {this.state.screen === 'yaqeen' && (
          <h1>YAQEEN</h1>
          )}
        {this.state.screen === 'navbar' && (
          <Navbar />
          )}
      </div>
    );
  }
}

export default App;
