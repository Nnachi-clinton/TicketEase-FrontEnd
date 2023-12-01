import LoginImage from '../assets/LoginImage.svg';
import LoginFormGrid from '../components/common/LoginFormGrid';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
  background: #f6f6f6;
`;

const Image = styled.img`
  width: 85%;
  height: 80%;
  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`;

function ChangeLogin() {
  return (
    <Container className="ChangeLogin">
      <LoginFormGrid />
      <Image
        className="gridItem LoginImage"
        src={LoginImage}
        alt="ChangeLoginImage"
      ></Image>
    </Container>
  );
}

export default ChangeLogin;
