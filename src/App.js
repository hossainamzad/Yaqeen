import React, { Component } from 'react';
// uncomment the following line for route
// import { Route } from 'react-router-dom'
import Navbar from './Components/navbar'
import EmailSubscription from './Components/emailSubscription'
import ContactUs from './Components/contactUs'
import Donate from './Components/donate'
import Footer from './Components/footer'

class App extends Component {
  state = {
  }
  render() {
    return (
      <div>
        <Navbar />
        <EmailSubscription />
        <ContactUs />
        <Donate />
        <Footer />
      </div>
    );
  }
}

export default App;
