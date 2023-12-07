import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../../utils/validateEmail';
import Edit from './Editimg/Edit.svg';
import AxiosInstance from '../../Request/AxiosInstance';

const Container = styled.div`
  display: grid;
  grid-template-columns: 120% 120%;
  justify-content: center;
`;
const Fieldset = styled.fieldset`
  margin-left: 16px;
  margin-right: 16px;
  border: none;
`;
const Input = styled.input`
  background: rgba(246, 246, 246, 1);
  border: none;
  height: 48px;
  border-radius: 10px;

  &::placeholder {
    padding-left: 4m0px;
    color: rgba(151, 151, 151, 1);
  }
`;
const Field = styled.div`
  width: 90%;
  position: relative;
`;
const Label = styled.label`
  font-size: 14px;
`;
const ImageIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 4px;
  background: rgba(80, 95, 152, 1);
  color: white;
  margin: 16px auto 16px auto;
`;

const EditMemberData = () => {
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [state, setState] = useState('');

  const getIsFormValid = () => {
    return (
      companyName &&
      validateEmail(businessEmail) &&
      businessPhone &&
      companyAddress &&
      state
    );
  };

  const clearForm = () => {
    setCompanyName('');
    setBusinessEmail('');
    setBusinessPhone('');
    setCompanyAddress('');
    setState('');
  };

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get(
        `/managers/GetById?id=${localStorage.getItem('userId')}`
      );
      const managerData = response.data.data;

      if (response.data.statusCode === 200) {
        setCompanyName(managerData.companyName);
        setBusinessEmail(managerData.businessEmail);
        setBusinessPhone(managerData.businessPhone);
        setCompanyAddress(managerData.companyAddress);
        setState(managerData.state);
      } else {
        clearForm();
        console.error(
          'API Error:',
          'Unexpected status code:',
          response.data.statusCode
        );
      }
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBusinessPhoneChange = (e) => {
    setBusinessPhone(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (getIsFormValid()) {
      try {
        const response = await AxiosInstance.put(
          `/managers/Edit?id=${localStorage.getItem('userId')}`,
          {
            companyName,
            businessEmail,
            businessPhone,
            companyAddress,
            state,
          }
        );

        if (response.data.statusCode === 200) {
          console.log('Data successfully saved to the database');
          fetchData(); // Fetch updated data after successful save
        } else {
          console.error('API Error:', response.data.statusCode);
        }
      } catch (error) {
        console.error('API Error:', error.message);
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <Fieldset>
          <Container>
            <div>
              <Field className="Field">
                <Label>Company Name</Label>
                <Input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company Name"
                />
                <ImageIcon src={Edit} alt="Edit Icon" />
              </Field>

              <Field className="Field">
                <Label>Company Email</Label>
                <Input
                  value={businessEmail}
                  placeholder="Business Email"
                  readOnly
                />
              </Field>
              <Field className="Field">
                <Label>Contact Phone</Label>
                <Input
                  value={businessPhone}
                  onChange={handleBusinessPhoneChange}
                  placeholder="Contact Phone"
                />
                <ImageIcon src={Edit} alt="Edit Icon" />
              </Field>
            </div>

            <div>
              <Field className="Field">
                <Label>Address</Label>
                <Input
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  placeholder="Address"
                />
                <ImageIcon src={Edit} alt="Edit Icon" />
              </Field>

              <Field className="Field">
                <Label>State</Label>
                <Input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="State"
                />
                <ImageIcon src={Edit} alt="Edit Icon" />
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

export default EditMemberData;
