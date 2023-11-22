import styled from 'styled-components';

const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-9xs);
  background-color: var(--color-white);
  width: 336px;
  height: 292px;
`;
const Decagon = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const DecagonWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 20px;
  width: 102px;
  height: 30px;
  width: ${(p) => p.propWidth};
`;
const FrameItem = styled.div`
  position: absolute;
  top: 55.5px;
  left: -0.5px;
  border-top: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 337px;
  height: 1px;
`;
const Active = styled.b`
  position: relative;
`;
const ActiveWrapper = styled.div`
  position: absolute;
  top: 19px;
  left: 0px;
  background-color: var(--color-steelblue-200);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  border: ${(p) => p.propBorder};
`;
const Status1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-xs);
  color: var(--color-silver-100);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 163px;
  left: 20px;
  width: 68px;
  height: 59px;
  font-size: var(--font-size-base);
  color: var(--color-steelblue-100);
`;
const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 246px;
  background-color: var(--color-steelblue-100);
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs);
  box-sizing: border-box;
`;
const GroupChild = styled.img`
  position: absolute;
  top: 19px;
  left: 0px;
  width: 163px;
  height: 51.75px;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 72px;
  left: 20px;
  width: 296px;
  height: 70.75px;
  color: var(--color-white);
`;
const StockholmIconsNavigation = styled.img`
  position: absolute;
  height: 100%;
  width: 6.08%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 93.92%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const ViewAllMembersParent = styled.div`
  position: absolute;
  top: 252px;
  left: 20px;
  width: 296px;
  height: 18px;
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray);
  cursor: ${(p) => p.propCursor};
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  width: 336px;
  height: 292px;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-mulish);
  top: ${(p) => p.propTop};
  left: ${(p) => p.propLeft};
`;

const CardContainer = ({
  institutionName,
  groupIcon,
  navigationIcon,
  propTop,
  propLeft,
  propWidth,
  propBorder,
  propCursor,
  onGroupContainer14Click,
}) => {
  return (
    <RectangleParentRoot propTop={propTop} propLeft={propLeft}>
      <FrameChild />
      <DecagonWrapper propWidth={propWidth}>
        <Decagon>{institutionName}</Decagon>
      </DecagonWrapper>
      <FrameItem />
      <FrameParent>
        <ActiveWrapper propBorder={propBorder}>
          <Active>Active</Active>
        </ActiveWrapper>
        <Status1>STATUS</Status1>
      </FrameParent>
      <FrameGroup>
        <Wrapper>
          <Active>10</Active>
        </Wrapper>
        <Status1>TOTAL MEMBERS</Status1>
        <GroupChild alt="" src={groupIcon} />
      </FrameGroup>
      <ViewAllMembersParent
        onClick={onGroupContainer14Click}
        propCursor={propCursor}
      >
        <Decagon>View all Members</Decagon>
        <StockholmIconsNavigation alt="" src={navigationIcon} />
      </ViewAllMembersParent>
    </RectangleParentRoot>
  );
};

export default CardContainer;
