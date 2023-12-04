import React, { useState } from 'react';
// import Input from '../common/Input';
import styled from 'styled-components';
import '../../components/user/UserProfileForm.css';
import Swal from 'sweetalert2';

function UpdateUserProfileForm() {
  // State for managing form values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    address: '',
    state: '',
  });

  // State for managing error messages
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    state: '',
  });

  // Destructuring form data and errors for better readability
  const { firstName, lastName, emailAddress, phoneNumber, address, state } =
    formData;

  const {
    errorFirstName,
    errorLastName,
    errorEmail,
    errorPhoneNumber,
    errorAddress,
    errorState,
  } = formErrors;

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!emailAddress.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(emailAddress)) {
      errors.email = 'Invalid email format';
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!isValidPhoneNumber(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
    }

    if (!address.trim()) {
      errors.address = 'Address is required';
    }

    if (!state.trim()) {
      errors.state = 'State is required';
    }

    // Set errors in the state
    setFormErrors(errors);

    // If there are no errors, proceed with updating the user profile
    if (Object.keys(errors).length === 0) {
      // Replace the alert with your actual logic for updating the user profile

      Swal.fire({
        icon: 'error',
        title: 'Update User Profile Logic',
        text: 'Please Update User Profile Logic',
        confirmButtonText: 'OK',
      });
    }
  };

  const isValidEmail = (email) => {
    // You can implement a more sophisticated email validation logic
    // This is a simple example
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // You can implement a more sophisticated phone number validation logic
    // This is a simple example
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  // Function to handle input changes
  const handleInputChange = (name, value) => {
    // Update the form data for the changed input
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error message when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  return (
    <Form>
      <FormField>
        <div className="Field">
          <Label>First Name</Label>
          <Value>
            <Input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              error={!!errorFirstName}
              errorMessage={errorFirstName}
            />
          </Value>
        </div>

        <div className="Field">
          <Label>Last Name</Label>
          <Value>
            <Input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              error={!!errorLastName}
              errorMessage={errorLastName}
            />
          </Value>
        </div>

        <div className="Field">
          <Label>Email Address</Label>
          <Value>
            <Input
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(e) =>
                handleInputChange('emailAddress', e.target.value)
              }
              error={!!errorEmail}
              errorMessage={errorEmail}
            />
          </Value>
        </div>

        <div className="Field">
          <Label>Phone Number</Label>
          <Value>
            <Input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              error={!!errorPhoneNumber}
              errorMessage={errorPhoneNumber}
            />
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16007021-9db8-4b6b-96b2-39d7deaeea0b?"
            />
          </Value>
        </div>

        <div className="Field">
          <Label>Address</Label>
          <Value>
            <Input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              error={!!errorAddress}
              errorMessage={errorAddress}
            />
          </Value>
        </div>

        <div className="Field">
          <Label>State</Label>
          <Value error={!!errorState} errorMessage={errorState}>
            <Input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => handleInputChange('state', e.target.value)}
            />
          </Value>
        </div>

        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </FormField>
    </Form>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  color: #1d2125;
  font: 400 16px/20px Mulish, sans-serif;
`;

const Value = styled.div`
  display: flex;
  flex-direction: column;
  color: #979797;
  width: 380px;
  height: 48px;
  border-radius: 4px;
  font: 400 16px/20px Mulish, sans-serif;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid;
  border-radius: 4px;
  padding: 14px;
  color: black;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.04);
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
  position: absolute;
  top: 30px;
  right: -10px;
`;

const StyledButton = styled.button`
  width: 382px;
  height: 48px;
  border-radius: 4px;
  background-color: #505f98;
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;

  &:hover {
    background-color: #3d4d80;
  }

  &:active {
    background-color: #2c3a5f;
  }
`;

// const button = {
//   width: "413px",
// };

export default UpdateUserProfileForm;
