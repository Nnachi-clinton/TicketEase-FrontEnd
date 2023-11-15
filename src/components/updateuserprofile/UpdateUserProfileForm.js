import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

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
      alert('Update User Profile Logic');
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
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="First Name"
        placeholder="Enter your first name"
        value={firstName}
        onChange={(e) => handleInputChange('firstName', e.target.value)}
        error={!!errorFirstName}
        errorMessage={errorFirstName}
      />
      <Input
        type="text"
        label="Last Name"
        placeholder="Enter your last name"
        value={lastName}
        onChange={(e) => handleInputChange('lastName', e.target.value)}
        error={!!errorLastName}
        errorMessage={errorLastName}
      />
      <Input
        type="text"
        label="Email Address"
        placeholder="Email Address"
        value={emailAddress}
        onChange={(e) => handleInputChange('emailAddress', e.target.value)}
        error={!!errorEmail}
        errorMessage={errorEmail}
      />
      <Input
        type="text"
        label="Phone Number"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
        error={!!errorPhoneNumber}
        errorMessage={errorPhoneNumber}
      />
      <Input
        type="text"
        label="Address"
        placeholder="Address"
        value={address}
        onChange={(e) => handleInputChange('address', e.target.value)}
        error={!!errorAddress}
        errorMessage={errorAddress}
      />
      <Input
        type="text"
        label="State"
        placeholder="State"
        value={state}
        onChange={(e) => handleInputChange('state', e.target.value)}
        error={!!errorState}
        errorMessage={errorState}
      />

      {/* Button component usage */}
      <Button type="submit">SUBMIT</Button>
    </form>
  );
}

export default UpdateUserProfileForm;
