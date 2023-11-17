import styled from 'styled-components';
import ContactUs from '../assets/ContactUs.svg';

const ImgTag = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  
`;

const StyledContactSent = styled.p`
  color: #21334f;
  font-family: 'Mulish', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin: 0 auto;
  display: block;
//   margin-bottom: 5px;
`;

const StyledAdminText = styled.p`
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border-style: none;
  background-color: #007bff;
  height: 45px;
  color: #fff;
  cursor: pointer;
  background-color: #505f98;
  margin: 0 auto;
  display: block;
`;

const StyledMain = styled.div`
  margin-top: 94px;
`;


function ContactResponse() {
  return (
  <StyledMain>

    <div>
      <ImgTag src={ContactUs} alt="imag" />
      <StyledContactSent className="ContactSent">Contact Sent</StyledContactSent>
      <StyledAdminText className="AdminText">Admin will reach out to you via your <br /> email shortly</StyledAdminText>
      <StyledButton className="btn">Continue Exploring Ticket Ease</StyledButton>
    </div>
  </StyledMain>
  );
}

export default ContactResponse;
