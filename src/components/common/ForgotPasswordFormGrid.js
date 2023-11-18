import TicketEaseLogo from '../../assets/images/TicketEaseLogo.svg';
import ForgotPasswordForm from '../common/ForgotPasswordForm';
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
        margin-top: 0;
    }
`;

const Heading = styled.h4`
    margin-top: 30px;
    color: #21334F;
    padding-left: 16px;
    margin-bottom: 15px;
    @media screen and (max-width: 1024px) {
        font-size: 20px; 
        margin-bottom: 0; 
    }
`;

function ForgotPasswordFormGrid(props) {
    return (
        <Wrapper className={`ForgotPasswordFormDetails ${props.className}`}>
            <Logo src={TicketEaseLogo} alt='TicketEaseLogo' />
            <Heading>Forgot Password</Heading>
            <ForgotPasswordForm />
        </Wrapper>
    );
}

export default ForgotPasswordFormGrid;