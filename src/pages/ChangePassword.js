import PasswordImage from '../assets/PasswordImage.svg';
import PasswordFormGrid from '../components/common/PasswordFormGrid';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 290px;
  margin-top: 84px;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
  background: #f6f6f6;
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
