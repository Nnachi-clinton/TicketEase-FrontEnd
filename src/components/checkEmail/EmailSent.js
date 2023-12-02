import React from "react";
import styled from "styled-components";
import Arrow from './Arrow-left.svg'
import email from './email(2) 1.svg'



export default function EmailSent(props) {
  const handleResendClick = () => {
    // Handle click to resend action
    // Add your logic here
  };

  return (
    <Div>
      <Div2>
        <Div3>
          <Img loading="lazy" src={email} />
          <Div4>Check your email</Div4>
          <Div5>
            We sent a password reset link to
            <br />
            sochimachiebuka@gmail.com
          </Div5>
          <a href="mailto:ticketeasesq017@gmail.com" style={{ color: '#505F98', textDecoration: 'none' }}>
            <Div6>Open email app</Div6>
          </a>
          <Div7>
            <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 400, color: 'rgba(189,189,189,1)' }}>
              Don’t receive the email?
            </span>
            <a href="#" onClick={handleResendClick} style={{ color: '#505F98', textDecoration: 'none' }}>
              <span style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 700, color: '#505F98' }}>
                Click to Resend link
              </span>
            </a>
          </Div7>
          <a href="/login" style={{ color: '#505F98', textDecoration: 'none' }}>
            <Div8>
              <Img2 loading="lazy" src={Arrow} />
              <Div9>Back to Login</Div9>
            </Div8>
          </a>
        </Div3>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  background-color: #fff;
  display: flex;
  width: 700px;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 166px 0 145px;
  padding: 45px 60px;
  @media (max-width: 991px) {
    margin: 40px 0;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
  display: flex;
  margin-bottom: 36px;
  width: 287px;
  max-width: 100%;
  flex-direction: column;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 110px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
`;

const Div4 = styled.div`
  color: #000;
  align-self: center;
  margin-top: 36px;
  white-space: nowrap;
  font: 700 24px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div5 = styled.div`
  color: #bdbdbd;
  text-align: center;
  max-width: 242px;
  align-self: center;
  margin-top: 19px;
  font: 400 16px Mulish, sans-serif;
`;


const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
  filter: invert(100%) brightness(0) sepia(100%) saturate(10000%) hue-rotate(270deg); 
`;

// ... (existing code remains unchanged)

const Div6 = styled.div`
  color: #fff; /* Text color remains unchanged */
  white-space: nowrap;
  align-items: center;
  border-radius: 4px;
  background-color: #505F98; /* Changed background color to #505F98 */
  align-self: stretch;
  margin-top: 30px;
  justify-content: center;
  padding: 14px 60px;
  font: 600 16px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const Div7 = styled.div`
  color: #505F98; /* Text color for Click to Resend link */
  text-align: center;
  align-self: stretch;
  margin-top: 18px;
  white-space: nowrap;
  font: 400 14px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  justify-content: center;
  border-radius: 4px;
  background-color: #505F98; /* Changed background color to #505F98 */
  align-self: center;
  display: flex;
  margin-top: 64px;
  gap: 10px;
  padding: 10px 14px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div9 = styled.div`
  color: #fff; /* Text color for Back to Login */
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 16px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

