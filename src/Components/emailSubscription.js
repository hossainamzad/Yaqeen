import React from 'react'
import '../css/emailSubscription.css'
const EmailSubscription = () => {
  return(
    <div>
      <h3>SIGN UP FOR UPDATES</h3>
      <input
        type="email"
        placeholder="Your E-Mail"
      />
      <div>
        <input
          className="submitButton"
          type="submit"
          value="SIGN UP"
        />
      </div>
    </div>
    )
}
export default EmailSubscription
