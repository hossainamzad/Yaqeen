import React from 'react'
import '../css/connectWithUs.css'

const ConnectWithUs = () => {
  return(
    <div className="connect">
      <h3>Connect With US</h3>
      <ul className="connectUs">
        <li style={{'backgroundColor': 'RGBA(62, 91, 148, 1.00)'}}><i className="fa fa-facebook-f"></i></li>
        <li style= {{'backgroundColor': 'RGBA(51, 164, 236, 1.00)'}}><i className="fa fa-twitter"></i></li>
        <li style={{'backgroundColor': 'RGBA(240, 89, 88, 1.00)'}}><i className="fa fa-youtube"></i></li>
        <li style= {{'backgroundColor': 'RGBA(52, 97, 132, 1.00)'}}><i className="fa fa-instagram"></i></li>
      </ul>
    </div>
  )
}
export default ConnectWithUs
