import Styled from 'styled-components';
import CameraIcon from '../managerUpdate/Camera';
// import LineThrough from "./Line";
import Inputs from '../managerUpdate/Form';

const StyleMain = Styled.div`
background: rgba(0, 0, 0, 0.5);
width: 100%;
// height: 96vh;
height: 1086px;
overflow: none;
display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerDiv = Styled.div`
  background: white;
  padding: 20px;
  width: 155vh;
  // height: 80vh
  height: auto
`;

function App() {
  return (
    <>
      <StyleMain>
        <div>
          <InnerDiv>
            <div>
              <CameraIcon />
              {/* <LineThrough /> */}
              <Inputs />
            </div>
          </InnerDiv>
        </div>
      </StyleMain>
    </>
  );
}

export default App;
