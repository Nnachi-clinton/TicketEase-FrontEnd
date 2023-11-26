import styled from 'styled-components';
import NoBoard from '../assets/NoBoard.svg';
import AddIcon from '../assets/addIcon.svg';

const StyledMain = styled.div`
margin-top: 100px;
`;

const ImgTag = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0
`;

const StyledFirstText = styled.p`
  color: #1D2126;
  font-family: 'Mulish', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: block;
  text-align: center;
`;

const StyledSecondText = styled.p`
color: #8C92A2;
font-family: 'Mulish', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
display: block;
text-align: center;

`;

const StyledButton = styled.button`
display: flex;
width: 231px;
padding: 16px 24px;
justify-content: center;
align-items: center;
gap: 5px;
border-radius: 6px;
background-color: #505F98;
color: #FFF;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;

margin: 0 auto;

`;

function CreateBoardEmptyManager() {
  return (
    <StyledMain>
      <div>
        <ImgTag src={NoBoard} alt="No Board" />
        
        <StyledFirstText className="FirstText">No Board Created</StyledFirstText>
        <StyledSecondText className="SecondText">
          You have not created any Board yet
        </StyledSecondText>

        <div>
        <StyledButton className="btn">
          <img src={AddIcon} alt="AddIcon" />
          Create Board
        </StyledButton>
        </div>

      </div>
    </StyledMain>
  );
}

export default CreateBoardEmptyManager;