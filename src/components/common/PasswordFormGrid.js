import TicketEaseLogo from '../../../src/assets/TicketEaseLogo.svg';
import PasswordForm from '../common/PasswordForm';
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

const Heading = styled.h2`
    margin-top: 6px;
    text-align: left !important;
    color: #21334F;
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
            <Logo src={TicketEaseLogo} alt='TicketEaseLogo' />
            <Text>Hi, Welcome to your account</Text>
            <Heading>Change Password</Heading>
            <PasswordForm />
        </Wrapper>
    );
}

export default PasswordFormGrid;