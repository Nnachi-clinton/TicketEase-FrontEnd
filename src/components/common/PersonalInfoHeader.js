import styled from 'styled-components';
import PersonalInfo from '../../assets/PersonalInfo.svg';
import Pen from '../../assets/Pen.svg';

const Header = styled.div`
  height: 120px;
  background: #505f98;
`;
const Image = styled.img`
  width: 186px;
  border-radius: 50%;
  position: absolute;
  left: 80px;
  top: 40px;
`;
const Ellipse = styled.div`
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 240px;
  top: 160px;
  box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.5);
`;
const Description = styled.div`
  padding-left: 24%;
`;
const Pencil = styled.img`
  padding-left: 10px;
  padding-top: 8px;
`;

const PersonalInfoHeader = () => {
  return (
    <div>
      <Header></Header>
      <Image src={PersonalInfo} alt="Admin Image" />
      <Ellipse>
        <Pencil src={Pen} />
      </Ellipse>
      <Description>
        <h3>Adekunle Gold</h3>
        <p>Admin/Support Team</p>
      </Description>
    </div>
  );
};

export default PersonalInfoHeader;
