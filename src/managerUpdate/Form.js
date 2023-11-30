// import { useState } from 'react';
// import styled from 'styled-components';
// import edit from '../../src/assets/edit.svg';

// const Form = styled.form`
//   max-width: 300px;
//   margin: 0 auto;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 15px;
//   &.address {
//     margin-top: -19px;
//   }
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-size: 14px;
//   color: #333;
// `;

// const Icon = styled.img`
//   position: relative;
//   top: -60px;
//   right: -350px;
//   transform: translateY(100%);
//   //width: 20px;
//   height: 20px;
//   z-index: 1;
// `;
// const Input = styled.input`
//   width: 350px;
//   padding: 8px;
//   padding-left: 30px;
//   height: 38px;
//   font-size: 14px;
//   margin-top: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   background: rgba(0, 0, 0, 0.04);
//   &::placeholder {
//     color: rgba(151, 151, 151, 1);
//     font-family: Mulish;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//   }
//   &.state {
//     background: rgba(246, 246, 246, 0.49);
//   }
//   &.businessPhone {
//     position: relative;
//     background: rgba(251, 251, 251, 1);
//   }
// `;

// const SubmitButton = styled.button`
//   background-color: rgba(80, 95, 152, 1);
//   color: white;
//   padding: 10px 15px;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   width: 413px;
//   height: 48px;
//   margin-top: 58px;
//   margin-bottom: 94px;
//   margin-left: -8px;
// `;

// const Inputs = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormGroup>
//         <Label htmlFor="Company Name">Company Name</Label>

//         <Input
//           type="name"
//           id="Company Name"
//           name="Company Name"
//           value={formData.CompanyName}
//           onChange={handleChange}
//           placeholder="Sochima Ikeji"
//         />
//       </FormGroup>

//       <FormGroup>
//         <Label htmlFor="Business Email">Business Email</Label>
//         <Input
//           type="email"
//           id="Business Email"
//           name="Business Email"
//           value={formData.BusinessEmail}
//           onChange={handleChange}
//           placeholder="Sochimaikeji34@gmail.com"
//         />
//       </FormGroup>

//       <FormGroup>
//         <Label htmlFor="Business Phone">Business Phone</Label>
//         <Input
//           type="phonenumber"
//           id="Business Phone"
//           name="Business Phone"
//           value={formData.BusinessPhone}
//           onChange={handleChange}
//           placeholder="07089675844"
//           className="businessPhone"
//         />
//         <Icon src={edit} alt="edit Icon" />
//       </FormGroup>

//       <FormGroup className="address">
//         <Label htmlFor="Company Address">Company Address</Label>
//         <Input
//           type="address"
//           id="Company Address"
//           name="Company Address"
//           value={formData.CompanyAddress}
//           onChange={handleChange}
//           placeholder="12B, Owoniyi street, Iju, Lagos"
//         />
//       </FormGroup>

//       <FormGroup>
//         <Label htmlFor="State">State</Label>
//         <Input
//           type="address"
//           id="State"
//           name="State"
//           value={formData.State}
//           onChange={handleChange}
//           placeholder="state"
//           className="state"
//         />
//       </FormGroup>

//       <SubmitButton type="submit">Submit</SubmitButton>
//     </Form>
//   );
// };

// export default Inputs;

import React, { useState } from 'react';
import styled from 'styled-components';
import edit from '../../src/assets/edit.svg'; // Replace with the correct path

const Form = styled.form`
  max-width: 300px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  &.address {
    margin-top: -19px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const Icon = styled.img`
  position: relative;
  top: -60px;
  right: -350px;
  transform: translateY(100%);
  height: 20px;
  z-index: 1;
`;

const Input = styled.input`
  width: 350px;
  padding: 8px;
  padding-left: 30px;
  height: 38px;
  font-size: 14px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.04);
  &::placeholder {
    color: rgba(151, 151, 151, 1);
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  &.state {
    background: rgba(246, 246, 246, 0.49);
  }
  &.businessPhone {
    position: relative;
    background: rgba(251, 251, 251, 1);
  }
`;

const SubmitButton = styled.button`
  background-color: rgba(80, 95, 152, 1);
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 413px;
  height: 48px;
  margin-top: 58px;
  margin-bottom: 94px;
  margin-left: -8px;
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 12px;
`;

// ... (previous imports)

const Inputs = () => {
  const [formData, setFormData] = useState({
    CompanyName: '',
    BusinessEmail: '',
    BusinessPhone: '',
    CompanyAddress: '',
    State: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    let valid = true;
    const newErrors = {};

    // Check if CompanyName is empty
    if (!formData.CompanyName.trim()) {
      valid = false;
      newErrors.CompanyName = 'Company Name is required';
    }

    // Check if BusinessEmail is a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.BusinessEmail)) {
      valid = false;
      newErrors.BusinessEmail = 'Invalid email format';
    }

    // Check if BusinessPhone is a valid phone number
    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(formData.BusinessPhone)) {
      valid = false;
      newErrors.BusinessPhone = 'Invalid phone number';
    }

    // Check if CompanyAddress is empty
    if (!formData.CompanyAddress.trim()) {
      valid = false;
      newErrors.CompanyAddress = 'Company Address is required';
    }

    // Check if State is empty
    if (!formData.State.trim()) {
      valid = false;
      newErrors.State = 'State is required';
    }

    if (valid) {
      // Add your form submission logic here
      console.log('Form data submitted:', formData);
    } else {
      // Update errors state with the new error messages
      setErrors(newErrors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="CompanyName">Company Name</Label>
        <Input
          type="text"
          id="CompanyName"
          name="CompanyName"
          value={formData.CompanyName}
          onChange={handleChange}
          placeholder="Sochima Ikeji"
        />
        {errors.CompanyName && <ErrorMsg>{errors.CompanyName}</ErrorMsg>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="BusinessEmail">Business Email</Label>
        <Input
          type="email"
          id="BusinessEmail"
          name="BusinessEmail"
          value={formData.BusinessEmail}
          onChange={handleChange}
          placeholder="Sochimaikeji34@gmail.com"
        />
        {errors.BusinessEmail && <ErrorMsg>{errors.BusinessEmail}</ErrorMsg>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="BusinessPhone">Business Phone</Label>
        <Input
          type="tel"
          id="BusinessPhone"
          name="BusinessPhone"
          value={formData.BusinessPhone}
          onChange={handleChange}
          placeholder="07089675844"
          className="businessPhone"
        />
        {errors.BusinessPhone && <ErrorMsg>{errors.BusinessPhone}</ErrorMsg>}
        <Icon src={edit} alt="edit Icon" />
      </FormGroup>

      <FormGroup className="address">
        <Label htmlFor="CompanyAddress">Company Address</Label>
        <Input
          type="text"
          id="CompanyAddress"
          name="CompanyAddress"
          value={formData.CompanyAddress}
          onChange={handleChange}
          placeholder="12B, Owoniyi street, Iju, Lagos"
        />
        {errors.CompanyAddress && <ErrorMsg>{errors.CompanyAddress}</ErrorMsg>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="State">State</Label>
        <Input
          type="text"
          id="State"
          name="State"
          value={formData.State}
          onChange={handleChange}
          placeholder="State"
          className="state"
        />
        {errors.State && <ErrorMsg>{errors.State}</ErrorMsg>}
      </FormGroup>

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default Inputs;
