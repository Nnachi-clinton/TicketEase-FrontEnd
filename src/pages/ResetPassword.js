import PasswordImage from '../assets/PasswordImage.svg';
import ResetPasswordFormGrid from '../components/common/ResetPasswordFormGrid';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 10px;
    background: #F6F6F6;
`;
const Image = styled.img`
    width: 80%;
    height: 85%;
    @media only screen and (max-width: 1024px) {
        height: 100%;
    }
`;

function ResetPassword() {
    return (
        <Container className="ChangePassword">
            <ResetPasswordFormGrid />
            <Image className='gridItem PasswordImage' src={PasswordImage} alt='ChangePasswordImage'></Image>
        </Container>
    )
}

export default ResetPassword;