import MemberInfoForm from './AllMembersPage/MemberInfoForm';
import MemberInforHeader from './AllMembersPage/MemberInforHeader';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
`;
const Form = styled.div`
  margin-top: 5%;
  marging-left: 100rem;
`;
const MemberProfile = ({ handleAllMembers }) => {
  return (
    <Container>
      <MemberInforHeader />
      <Form>
        <MemberInfoForm handleAllMembers={handleAllMembers} />
      </Form>
    </Container>
  );
};

export default MemberProfile;
