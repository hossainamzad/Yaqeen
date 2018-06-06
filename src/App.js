import React, { Component } from 'react';
// uncomment the following line for route
// import { Route } from 'react-router-dom'
import Navbar from './Components/navbar'
import EmailSubscription from './Components/emailSubscription'

class App extends Component {
  state = {
  }
  render() {
    return (
      <div>
        <h1>YAQEEN</h1>
        <Navbar />
        <EmailSubscription />
      </div>
    );
  }
}

export default App;
