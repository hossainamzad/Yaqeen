import React, { Component } from 'react';
// uncomment the following line for route
// import { Route } from 'react-router-dom'
import Navbar from './Components/navbar'
import JumbotronSection from './Components/jumbotronSection'
// import LatestNewsAndEvents from './Components/latestNewsAndEvents'
import SignupForNewsLetters from './Components/signupForNewsLetters'
import EmailSubscription from './Components/emailSubscription'
import ConnectWithUs from './Components/connectWithUs'
import Donate from './Components/donate'
// import Bell from './Components/bell'
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
        <JumbotronSection />
        {/* LatestNewsAndComponent Component will show up here */}
        <SignupForNewsLetters />
        <div className='secondSection'>
          <EmailSubscription />
          <PhysicalLocation />
          <ConnectWithUs />
          <Donate />
        </div>
        {/* Bell Component will show up here */}
        <Footer />
      </div>
    );
  }
}

export default App;
