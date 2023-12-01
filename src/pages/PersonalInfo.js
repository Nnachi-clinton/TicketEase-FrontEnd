import PersonalInfoForm from '../components/common/PersonalInfoForm';
import PersonalInfoHeader from '../components/common/PersonalInfoHeader';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
`;
const Form = styled.div`
  margin-top: 5%;
`;

const PersonalInfo = () => {
  return (
    <Container>
      <PersonalInfoHeader />
      <Form>
        <PersonalInfoForm />
      </Form>
    </Container>
  );
};

export default PersonalInfo;
