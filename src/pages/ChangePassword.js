import PasswordImage from '../assets/PasswordImage.svg';
import PasswordFormGrid from '../components/common/PasswordFormGrid';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 288px;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
  background: #f6f6f6;
  width: 1205px;
  height: 799px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 80%;
  height: 85%;
  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`;

function ChangePassword() {
  return (
    <Container className="ChangePassword">
      <PasswordFormGrid />
      <Image
        className="gridItem PasswordImage"
        src={PasswordImage}
        alt="ChangePasswordImage"
      ></Image>
    </Container>
  );
}

export default ChangePassword;
