import styled from 'styled-components';

const Div = styled.div`
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 21px 0;
  @media (max-width: 991px) {
    margin-top: 30px;
  }
`;

const Div2 = styled.div`
  display: flex;
  width: 296px;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Div3 = styled.div`
  color: #1d2126;
  flex-grow: 1;
  white-space: nowrap;
  margin-left: 10;
  font: 600 20px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
`;

const Div4 = styled.div`
  background-color: #e5e5e5;
  align-self: stretch;
  margin-top: 12px;
  height: 1px;
`;

const Div5 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 19px;
  flex-direction: column;
  padding: 0 20px;
`;

const Div6 = styled.div`
  color: #c4c4c4;
  white-space: nowrap;
  font: 400 12px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div7 = styled.div`
  display: flex;
  margin-top: 7px;
  justify-content: space-between;
  gap: 20px;
`;

const Div8 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Img2 = styled.img`
  aspect-ratio: 3.13;
  object-fit: contain;
  object-position: center;
  width: 163px;
  overflow: hidden;
  align-self: center;
`;

const Div9 = styled.div`
  color: #c4c4c4;
  align-self: stretch;
  margin-top: 23px;
  white-space: nowrap;
  font: 400 12px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div10 = styled.div`
  color: #505f98;
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  background-color: rgba(80, 95, 152, 0.05);
  align-self: stretch;
  margin-top: 7px;
  padding: 10px;
  font: 700 16px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div11 = styled.div`
  color: #21334f;
  align-self: stretch;
  margin-top: 34px;
  white-space: nowrap;
  font: 700 14px Mulish, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div12 = styled.div`
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
`;

const Div13 = styled.div`
  color: #fff;
  white-space: nowrap;
  background-color: #505f98;
  aspect-ratio: 1;
  width: 50px;
  height: 50px;
  padding: 0 11px;
  font: 700 24px Mulish, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  align-self: end;
  margin-top: 110px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const CardContainer = styled.div`
  width: 336px;
  height: 320px;
  border: 1px solid black;
  border-radius: 4px;
  background: #fff;
`;

const BoardCard = ({ boardName }) => {
  return (
    <CardContainer>
      <Div>
        <Div2>
          <Div3>{boardName}</Div3>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68ffaddb-8e9d-4a42-94fa-324ab898210e?"
          />
        </Div2>
        <Div4 />
        <Div5>
          <Div6>TOTAL BOARDS</Div6>
          <Div7>
            <Div8>
              <Img2 loading="lazy" srcSet="..." />
              <Div9>STATUS</Div9>
              <Div10>Active</Div10>
              <Div11>View all Projects</Div11>
            </Div8>
            <Div12>
              <Div13>10</Div13>
              <Img3
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/633f998f-cf83-4a7d-8859-a97c7b617fa1?"
              />
            </Div12>
          </Div7>
        </Div5>
      </Div>
    </CardContainer>
  );
};

export default BoardCard;
