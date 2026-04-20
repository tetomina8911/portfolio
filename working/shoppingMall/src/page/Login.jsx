import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log("login user function isue")
    setAuthenticate(true);
    navigate('/')
  }
  

  return (
    <div id="sub-container">
      <div className="signIn-container">
        <h2 className="login-title">My account</h2>
        <ul className="signInUp-wrapper">
          <li className='selected'>Sign in</li>
          <li>Register</li>
        </ul>

        <form action="" onSubmit={(event) => loginUser(event)}>
          <ul className='input-wrapper'>
            <li><input type="text" placeholder='Email' /></li>
            <li><input type="password" name="" id="" placeholder='Password' /></li>
          </ul>
          <div className="remember-checkbox">
            <input type="checkbox" name="rmemeberMe" id="rmemeberMe" />
            <label htmlFor="rmemeberMe">Remember me</label>
          </div>

          <button className='btn-signIn' type='submit'>SIGN IN</button>

          <p className='btn-forgot'>Have you forgotten your password?</p>
        </form>
      </div>
    </div>
  )
}

export default Login