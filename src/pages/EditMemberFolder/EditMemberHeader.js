import styled from 'styled-components';
import UserDp from './Editimg/UserDp.svg';
import DarkPen from './Editimg/DarkPen.svg';

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
  margin-left: 300px;
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
  margin-left: 300px;
`;
const Description = styled.div`
  padding-left: 26%;
  margin-left: 270px;
`;
const Pencil = styled.img`
  padding-left: 10px;
  padding-top: 8px;
`;

const EditMemberHeader = () => {
  return (
    <div>
      <Header></Header>
      <Image src={UserDp} alt="Admin Image" />
      <Ellipse>
        <Pencil src={DarkPen} />
      </Ellipse>
      <Description>
        <h3> Clinton Amadi</h3>
        <p> Squad 17 CTO</p>
      </Description>
    </div>
  );
};

export default EditMemberHeader;
