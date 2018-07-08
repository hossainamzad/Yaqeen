import React from 'react'
import '../css/signupForNewsLetters.css'
const SignupForNewsLetters = () => {
  return(
    <div className='newsLetters'>
      <h3 className='heading'>Sign-up for our Newsletter and Updates</h3>
      <input
        className='newLetterInput'
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
export default SignupForNewsLetters
