import TicketEaseLogo from '../../../src/assets/TicketEaseLogo.svg';
// import PasswordForm from '../common/PasswordForm';
import styled from 'styled-components';
import LoginButton from './LoginButton';
import ResetPasswordForm from './ResetPasswordForm';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 80%;
  padding-left: 20%;
`;

const Logo = styled.img`
  margin-top: 5%;
  @media screen and (max-width: 1024px) {
    max-width: 80%;
  }
`;

const Heading = styled.h2`
  margin-top: 18px;
  text-align: left !important;
  color: #21334f;
  padding-left: 16px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 0;
  }
`;

function PasswordFormGrid(props) {
  return (
    <Wrapper className={`ChangePasswordFormDetails ${props.className}`}>
      <Link to="/Footer-header">
        <Logo src={TicketEaseLogo} alt="TicketEaseLogo" />
      </Link>
      <Heading>Reset Password</Heading>
      <ResetPasswordForm />
      <LoginButton />
    </Wrapper>
  );
}

export default PasswordFormGrid;
