import React, { useState } from 'react';
import image from './Login.png';
import Logo from './TicketEaseLogo.jpg';
import ErrorIcon from './ErrorIcon.svg';
import './Login.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('https://localhost:7075/api/Authentication/Login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then(response => {
            if (response.ok) {
              // Successful login
              setLoginError('');
              return response.json();
            } else {
              // Failed login
              throw new Error('Login failed');
            }
          })
          .then(data => {
            // Handle successful login
            console.log('Login successful:', data);
            // Perform actions upon successful login, e.g., redirect to another page
          })
          .catch(error => {
            // Handle failed login
            console.error('Login error:', error);
            setLoginError('Login failed. Please check your credentials.');
          });
      };
    
    return (

        <div className="FirstHeader">
      <div className="auth-form-container">
        <span className="Firstlogo-container" >
          <img src={Logo} alt="" className="FirstTicketLogo" />
          <span className='FirstlogoEase'>TICKET EASE</span>
        </span>
        <h3 className='FirstLoginToYourAccount'>Login to your account</h3>
        <form className="Firstlogin-form" onSubmit={handleSubmit}>
          <label className='PassEmailLabel' htmlFor="email">Email</label>
          <input
            className='FirstInput'
            type="email"
            placeholder="TicketEase@gmail.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='Firstlabel' htmlFor="password">Password</label>
          <input
            className='FirstInput'
            type="password"
            placeholder="*********"
            id="epasswordmail"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h6>
            <img src={ErrorIcon} alt="" className="FirstErrorIcon" />
            <label className="Firstpassword-warning">
              Please input the password that was sent to you
            </label>
          </h6>
          <button className='FirstButton' type="submit">Login</button>
          {loginError && <p>{loginError}</p>}
        </form>
      </div>
      <div className='FirstLoginImagery frame'>
        <img src={image} alt="" className="Firstimage" />
      </div>
    </div>

    )
}
