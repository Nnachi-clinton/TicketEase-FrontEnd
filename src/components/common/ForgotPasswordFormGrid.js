import TicketEaseLogo from '../../assets/TicketEaseLogo.svg';
import ForgotPasswordForm from '../common/ForgotPasswordForm';
import styled from 'styled-components';
import LoginButton from './LoginButton';
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

// const Text = styled.p`
//     margin-bottom: 0;
//     padding-left: 16px;
//     @media screen and (max-width: 1024px) {
//         margin-top: 0;
//     }
// `;

const Heading = styled.h4`
  margin-top: 30px;
  color: #21334f;
  padding-left: 16px;
  margin-bottom: 15px;
  font-weight: 800;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 0;
  }
`;

function ForgotPasswordFormGrid(props) {
  return (
    <Wrapper className={`ForgotPasswordFormDetails ${props.className}`}>
      <Link to="/Footer-header">
        <Logo src={TicketEaseLogo} alt="TicketEaseLogo" />
      </Link>
      <Heading>Forgot Password</Heading>
      <ForgotPasswordForm />
      <LoginButton />
    </Wrapper>
  );
}

export default ForgotPasswordFormGrid;
