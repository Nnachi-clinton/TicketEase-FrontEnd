import TicketEaseLogo from '../../../src/assets/TicketEaseLogo.svg';
import LoginForm from '../common/LoginForm';
import styled from 'styled-components';

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

const Text = styled.p`
    margin-bottom: 0;
    padding-left: 16px;
    @media screen and (max-width: 1024px) {
        font-size: 14px; 
        margin-top: 0;
    }
`;

const Heading = styled.h3`
    margin-top: 0;
    color: #21334F;
    padding-left: 16px;
    margin-bottom: 0px;
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
