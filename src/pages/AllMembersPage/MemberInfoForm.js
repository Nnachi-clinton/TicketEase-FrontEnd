import React, { useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../../utils/validateEmail';
import AxiosInstance from '../../Request/AxiosInstance';

const Container = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: center;
`;

const Fieldset = styled.fieldset`
  width: 1084px;
  height: 1034px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
`;

const Input = styled.input`
  background: rgba(246, 246, 246, 0.49);
  border: none;
  height: 48px;
  border-radius: 4px;

  &::placeholder {
    padding-left: 30px;
    color: rgba(151, 151, 151, 1);
  }
`;

const Select = styled.select`
  height: 48px; /* Adjust the height as needed */
  font-size: 14px;
`;

const Field = styled.div`
  width: 90%;
  position: relative;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Button = styled.button`
  display: block;
  width: 50%;
  height: 48px;
  border: none;
  border-radius: 4px;
  background: rgba(80, 95, 152, 1);
  color: white;
  margin: 16px auto 16px auto;
  cursor: pointer;
`;

const MemberInfoForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getIsFormValid = () => {
    return firstName && lastName && password && validateEmail(email);
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await AxiosInstance.post(
    //     '/Authentication/Register/6db01435-a30c-44ae-9e23-95e1fecf0180',
    //     {
    //       firstName,
    //       lastName,
    //       email,
    //       password,
    //     }
    //   );

    //   console.log('API Response:', response.data);
    //   // alert('Personal Information saved!');
    //   clearForm();
    // } catch (error) {
    //   console.error('API Error:', error.message);
    // }
    try {
      const response = await AxiosInstance.post('/Authentication/Register/', {
        firstName,
        lastName,
        email,
        password,
      });

      console.log('API Response:', response.data);
      // Assuming success status code is 200
      if (response.status === 200) {
        // alert('Personal Information saved!');
        clearForm();
      } else {
        console.error('API Error:', 'Unexpected status code:', response.status);
      }
    } catch (error) {
      console.error('API Error:', error.message);
      // Handle specific error scenarios here
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <Container>
            <div>
              <Field className="Field">
                <Label>First Name</Label>
                <Input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  placeholder="First Name"
                />
              </Field>
              <Field className="Field">
                <Label>Last Name</Label>
                <Input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  placeholder="Last Name"
                />
              </Field>
            </div>

            <div>
              <Field className="Field">
                <Label>Password</Label>
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
              </Field>
              <Field className="Field">
                <Label>Email</Label>
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                />
              </Field>
            </div>
          </Container>
          <Button type="submit" disabled={!getIsFormValid()}>
            Save
          </Button>
        </Fieldset>
      </form>
    </div>
  );
};

export default MemberInfoForm;
