import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/navbar.css'
function Navbar () {
  return(
    <div className="container">
      <div>
        <img className="image" src="https://yaqeeninstitute.org/wp-content/uploads/2017/08/YQN_WebLogo2x.png"/>
      </div>
      <ul className="navigation">
        <li><Link to="/navbar">ABOUT US</Link></li>
        <li><Link to="/navbar">RESEARCH</Link></li>
        <li><Link to="/navbar">MULTIMEDIA</Link></li>
        <li><Link to="/#">DONATE</Link></li>
      </ul>
    </div>
  )
}
export default Navbar
