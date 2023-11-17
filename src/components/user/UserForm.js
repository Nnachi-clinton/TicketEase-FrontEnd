import { useState } from 'react';
import styled from 'styled-components';
import edit from '../../assets/edit.svg';

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
  //width: 20px;
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

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="First Name">First Name</Label>

        <Input
          type="name"
          id="First Name"
          name="First Name"
          value={formData.FirstName}
          onChange={handleChange}
          placeholder="Sochima Ikeji"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="First Name">Last Name</Label>

        <Input
          type="name"
          id="Last Name"
          name="Last Name"
          value={formData.LastName}
          onChange={handleChange}
          placeholder="Sochima Ikeji"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="Email">Email</Label>
        <Input
          type="email"
          id="Email"
          name="Email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Sochimaikeji34@gmail.com"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="Phone Number">Business Phone</Label>
        <Input
          type="phonenumber"
          id="Phone"
          name="Phone Number"
          value={formData.PhoneNumber}
          onChange={handleChange}
          placeholder="07089675844"
          className="phoneNumber"
        />
        <Icon src={edit} alt="edit Icon" />
      </FormGroup>

      <FormGroup className="address">
        <Label htmlFor="Address">Company Address</Label>
        <Input
          type="address"
          id="Address"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          placeholder="12B, Owoniyi street, Iju, Lagos"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="State">State</Label>
        <Input
          type="address"
          id="State"
          name="State"
          value={formData.State}
          onChange={handleChange}
          placeholder="state"
          className="state"
        />
      </FormGroup>

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};
export default UserForm;
