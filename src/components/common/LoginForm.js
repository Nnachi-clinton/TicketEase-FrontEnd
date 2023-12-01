import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../../utils/validateEmail';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Fieldset = styled.fieldset`
  border: none;
  width: 80%;
`;

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">
      {' '}
      Password incorrect. If you don't remember your password. Reset it{' '}
    </p>
  );
};

const EmailErrorMessage = () => {
  return <p className="FieldError">Please provide a valid Email address </p>;
};

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const getIsFormValid = () => {
    return validateEmail(email) && password.length >= 8;
  };
  const clearForm = () => {
    setEmail('');
    setPassword('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!getIsFormValid()) {
      return;
    }

    try {
      const response = await axios.post(
        'https://localhost:7075/api/Authentication/login',
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
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
        clearForm();
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
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessage={
              email && !validateEmail(email) ? <EmailErrorMessage /> : ''
            }
            style={{
              height: '26px',
              width: '90%',
              background: 'white',
            }}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={
              password && password.length < 8 ? <PasswordErrorMessage /> : ''
            }
            style={{
              height: '26px',
              width: '90%',
              background: 'white',
            }}
          />
          {
            <p
              style={{
                fontSize: 'small',
                marginTop: '-7px',
                marginBottom: '25px',
                color: '#505F98',
              }}
            >
              Forgot Password?
            </p>
          }
          <Button
            style={{
              background: '#505F98',
              height: '48px',
              width: '98%',
            }}
            type="submit"
            disabled={!getIsFormValid()}
          >
            Login
          </Button>
        </Fieldset>
      </form>
    </div>
  );
}

export default LoginForm;
