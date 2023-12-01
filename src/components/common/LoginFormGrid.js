import TicketEaseLogo from '../../../src/assets/TicketEaseLogo.svg';
import LoginForm from '../common/LoginForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 80%;
  padding-left: 20%;
`;

const Logo = styled.img`
  margin-top: 5%;
  padding-left: 42px;
  @media screen and (max-width: 1024px) {
    max-width: 80%;
  }
`;

const Heading = styled.h3`
  margin-top: 38px;
  color: #21334f;
  padding-left: 48px;
  margin-bottom: 8px;
  margin-left: 18px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 0;
  }
`;

function LoginFormGrid(props) {
  return (
    <Wrapper className={`ChangeLoginFormDetails ${props.className}`}>
      <Link to="/Footer-header">
        <Logo src={TicketEaseLogo} alt="TicketEaseLogo" />
      </Link>
      <Heading>Login to your account</Heading>
      <LoginForm />
    </Wrapper>
  );
}

export default LoginFormGrid;
