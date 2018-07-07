import React, { Component } from 'react';
// uncomment the following line for route
// import { Route } from 'react-router-dom'
import Navbar from './Components/navbar'
import EmailSubscription from './Components/emailSubscription'
import ConnectWithUs from './Components/connectWithUs'
import Donate from './Components/donate'
import Footer from './Components/footer'
import PhysicalLocation from './Components/physicalLocation'
import './css/app.css'

class App extends Component {
  state = {
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className='secondSection'>
          <EmailSubscription />
          <PhysicalLocation />
          <ConnectWithUs />
          <Donate />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
