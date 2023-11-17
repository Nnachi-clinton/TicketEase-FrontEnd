import TicketEaseLogo from '../../../src/assets/TicketEaseLogo.svg';
import LoginForm from '../common/LoginForm';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    padding-left: 20%;
`;

const Logo = styled.img`
    margin-top: 5%;
    padding-left: 32px;
    @media screen and (max-width: 1024px) {
        max-width: 80%; 
    }
`;

const Heading = styled.h4`
    margin-top: 20px;
    color: #21334F;
    padding-left: 48px;
    margin-bottom: 0px;
    // margin-left: 35px;
    @media screen and (max-width: 1024px) {
        font-size: 20px; 
        margin-bottom: 0; 
    }
`;

function LoginFormGrid(props) {
    return (
        <Wrapper className={`ChangeLoginFormDetails ${props.className}`}>
            <Logo src={TicketEaseLogo} alt='TicketEaseLogo' />
            <Heading>Login to your account</Heading>
            <LoginForm />
        </Wrapper>
    );
}

export default LoginFormGrid;
