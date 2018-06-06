import React from 'react'
import { Link, Redirect } from 'react-router-dom'
function Navbar () {
  return(
    <div className="continer-fluid">
      <ul>
        <li><Link to="/navbar">ABOUT US</Link></li>
        <li><Link to="/navbar">RESEARCH</Link></li>
        <li><Link to="/navbar">MULTIMEDIA</Link></li>
        <li><Link to="/#">DONATE</Link></li>
      </ul>
    </div>
  )
}
export default Navbar
