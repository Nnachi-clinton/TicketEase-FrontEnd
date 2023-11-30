import { useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../../utils/validateEmail';
import Pen from '../../assets/Pen.svg';
import PenColored from '../../assets/PenColored.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: center;
`;
const Fieldset = styled.fieldset`
  margin-left: 16px;
  margin-right: 16px;
  border: none;
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
  width: 50%;
  height: 48px;
  border: none;
  border-radius: 4px;
  background: rgba(80, 95, 152, 1);
  color: white;
  margin: 16px auto 16px auto;
  cursor: pointer;
`;

const PersonalInfoForm = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');

  const getIsFormValid = () => {
    return (
      fullName && address && phoneNumber && dateOfBirth && validateEmail(email)
    );
  };
  const clearForm = () => {
    setFullName('');
    setAddress('');
    setPhoneNumber('');
    setDateOfBirth('');
    setEmail('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Personal Information saved!');
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Fieldset>
          <Container>
            <div>
              <Field className="Field">
                <Label>Full Name</Label>
                <Input
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  placeholder="Full Name"
                />
                <ImageIcon src={PenColored} alt="Edit Icon" />
              </Field>
              <Field className="Field">
                <Label>Address</Label>
                <Input
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  placeholder="Address"
                />
                <ImageIcon src={PenColored} alt="Edit Icon" />
              </Field>
              <Field className="Field">
                <Label>Phone Number</Label>
                <Input
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder="Phone Number"
                />
                <ImageIcon src={PenColored} alt="Edit Icon" />
              </Field>
            </div>

            <div>
              <Field className="Field">
                <Label>Date Of Birth</Label>
                <Input
                  value={dateOfBirth}
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                  placeholder="Date Of Birth"
                />
                <ImageIcon src={PenColored} alt="Edit Icon" />
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
                <ImageIcon src={PenColored} alt="Edit Icon" />
              </Field>
            </div>
          </Container>
          <Button type="submit" disabled={!getIsFormValid()}>
            {' '}
            Save{' '}
          </Button>
        </Fieldset>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
