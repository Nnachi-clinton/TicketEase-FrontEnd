import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import image from './Login.png';
import Logo from './TicketEaseLogo.jpg';
import ErrorIcon from './ErrorIcon.svg';
import './Login.css';
import axios from 'axios';
import Swal from 'sweetalert2';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://localhost:7075/api/Authentication/login',
        {
          email: email,
          password: password,
        }
      );
      console.log(response);


      if (response.data.statusCode === 200) {
        const token = response.data.data;
        console.log(token);
        localStorage.setItem('authToken', token);
        navigate('/ManagerDashBoard');

        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 1500, // Automatically close after 1.5 seconds
          position: 'top-end',
        });
      } else {
        console.error('Error:', response.data);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error: ${response.data.message}`,
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      if (error.response) {
        console.error('Server Error:', error.response.status);
        console.error('Error Message:', error.response.data.message);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An unexpected error occurred: ' + error.message,
          confirmButtonText: 'OK',
        });
      } else if (error.request) {
        console.error('No Response from Server');

        Swal.fire({
          icon: 'error',
          title: 'No Response from Server',
          text: 'No response from the server. Please try again.',
          confirmButtonText: 'OK',
        });
      } else {
        console.error('Unexpected Error:', error.message);

        Swal.fire({
          icon: 'error',
          title: 'Error during login.',
          text: 'An unexpected error occurred during login.',
          confirmButtonText: 'OK',
        });
      }
    }
  };

  return (
    <div className="FirstHeader">
      <div className="auth-form-container">
        <span className="Firstlogo-container">
          <Link to="/Footer-header">
            <img src={Logo} alt="" className="FirstTicketLogo" />
          </Link>
          <span className="FirstlogoEase">TICKET EASE</span>
        </span>
        <h3 className="FirstLoginToYourAccount">Login to your account</h3>
        <form className="Firstlogin-form" onSubmit={handleSubmit}>
          <label className="PassEmailLabel" htmlFor="email">
            Email
          </label>
          <input
            className="FirstInput"
            type="email"
            placeholder="TicketEase@gmail.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="Firstlabel" htmlFor="password">
            Password
          </label>
          <input
            className="FirstInput"
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
          <button className="FirstButton" type="submit">
            Login
          </button>
          {loginError && <p>{loginError}</p>}
        </form>
      </div>
      <div className="FirstLoginImagery frame">
        <img src={image} alt="" className="Firstimage" />
      </div>
    </div>
  );
};
