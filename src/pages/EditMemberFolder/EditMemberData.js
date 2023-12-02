import { useState } from 'react';
import styled from 'styled-components';
import { validateEmail } from '../../utils/validateEmail';
import Edit from './Editimg/Edit.svg';
import AxiosInstance from '../../Request/AxiosInstance';

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
  // margin-top: 16px;
  // margin-left: 10%;
  // margin-right: 10%;
`;

const EditMemberData = () => {
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

    try {
      const response = await AxiosInstance.post(
        '/Authentication/Register/263559eb-cec8-4402-b2f2-a094153db202',
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      console.log('API Response:', response.data);
      if (response.status === 200) {
        clearForm();
      } else {
        console.error('API Error:', 'Unexpected status code:', response.status);
      }
    } catch (error) {
      console.error('API Error:', error.message);
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
                <ImageIcon src={Edit} alt="Edit Icon" />
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
                <ImageIcon src={Edit} alt="Edit Icon" />
              </Field>
            </div>

            <div>
            <Field className="Field">
                <Label>Password</Label>
                <Input
                  value={password}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Password"
                />
                <ImageIcon src={Edit} alt="Edit Icon" />
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
                <ImageIcon src={Edit} alt="Edit Icon" />
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

export default EditMemberData;
