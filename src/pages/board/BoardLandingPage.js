import { useState, useCallback } from 'react';
import stockholmiconsNavigationLeft2 from '../../assets/cardimages/stockholmicons--navigation--left2.svg';
import stockholmiconsNavigationLeft21 from '../../assets/cardimages/stockholmicons--navigation--left21.svg';
import group1554 from '../../assets/cardimages/group-1554.svg';
import stockholmiconsCodePlus from '../../assets/cardimages/stockholmicons--code--plus.svg';
import groupIcons from '../../assets/cardimages/group-icons.svg';
import stockholmiconsNavigationAngleright from '../../assets/cardimages/stockholmicons--navigation--angleright.svg';

import styled from 'styled-components';
import CardContainer from '../../components/organization/CardContainer';

const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-11xs);
  background-color: var(--color-steelblue-100);
  width: 20px;
  height: 20px;
`;

const breakpoint = '768px';

const Div = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 30%;
  line-height: 17px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 2px;
  left: 63px;
  width: 20px;
  height: 20px;
  color: var(--color-white);
`;
const Div1 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 48.47%;
  line-height: 17px;
`;
const Div2 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 67.94%;
  line-height: 17px;
`;
const Copy2 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 38.55%;
  line-height: 17px;
`;
const Div3 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 45.28%;
  line-height: 17px;
`;
const StockholmIconsNavigation1 = styled.img`
  position: absolute;
  height: 100%;
  width: 45.28%;
  top: 0%;
  right: 54.72%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Parent1 = styled.div`
  position: absolute;
  width: 20.23%;
  top: calc(50% - 12px);
  right: 79.77%;
  left: 0%;
  height: 24px;
  color: #dadada;
`;
const Div4 = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: 0%;
  line-height: 17px;
`;
const StockholmIconsNavigation2 = styled.img`
  position: absolute;
  height: 100%;
  width: 44.44%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 55.56%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Group = styled.div`
  position: absolute;
  width: 20.61%;
  top: calc(50% - 12px);
  right: 0%;
  left: 79.39%;
  height: 24px;
`;
const GroupInner = styled.img`
  position: absolute;
  top: 10px;
  left: 149px;
  width: 15px;
  height: 3px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 840px;
  left: 709px;
  width: 262px;
  height: 24px;
  text-align: center;
  color: var(--color-gray-300);
  font-family: var(--font-helvetica-neue);
`;
const Organizations1 = styled.h2`
  margin: 0;
  position: absolute;
  top: 7px;
  left: 0px;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
`;
const StockholmIconsCodePlus = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;
const CreateOrganizations = styled.div`
  position: relative;
  font-weight: 600;
`;
const StockholmIconsCodePlusParent = styled.div`
  position: absolute;
  top: 0px;
  left: 814px;
  border-radius: var(--br-7xs);
  background-color: var(--color-steelblue-100);
  width: 190px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  box-sizing: border-box;
  gap: 10px;
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--color-white);

  @media (max-width: ${breakpoint}) {
    /* Adjust styles for smaller screens */
    /* For example, you might change the width of certain elements or adjust margins/paddings */
  }
`;
const OrganizationsGroup = styled.div`
  position: absolute;
  top: 110px;
  left: 318px;
  width: 1045px;
  height: 56px;
  font-size: var(--font-size-5xl);

  @media (max-width: ${breakpoint}) {
    /* Adjust styles for smaller screens */
  }
`;

const CreateorganizationsadminRoot = styled.div`
  position: relative;
  background-color: #f6f6f6;
  width: 100%;
  height: 923px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
  font-family: var(--font-mulish);

  @media (max-width: ${breakpoint}) {
    /* Adjust styles for smaller screens */
    /* For example, you might change the width of certain elements or adjust margins/paddings */
  }
`;

const BoardLandingPage = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onGroupContainer14Click = useCallback(() => {
    // Please sync "AllMembersProfile/Manager" to the project
  }, []);

  const onFrameContainer10Click = useCallback(() => {
    // Please sync "CreateBoard/Manager" to the project
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  console.log(closeFrame, isFrameOpen);

  return (
    <>
      <CreateorganizationsadminRoot>
        <GroupParent>
          <GroupDiv>
            <GroupItem />
            <Div>1</Div>
          </GroupDiv>
          <Div1>3</Div1>
          <Div2>10</Div2>
          <Copy2>2</Copy2>
          <Parent1>
            <Div3>Prev</Div3>
            <StockholmIconsNavigation1
              alt="stockholmiconsNavigationLeft2"
              src={stockholmiconsNavigationLeft2}
            />
          </Parent1>
          <Group>
            <Div4>Next</Div4>
            <StockholmIconsNavigation2
              alt="stockholmiconsNavigationLeft21"
              src={stockholmiconsNavigationLeft21}
            />
          </Group>
          <GroupInner alt="group1554" src={group1554} />
        </GroupParent>
        <OrganizationsGroup>
          <Organizations1>Boards</Organizations1>
          <StockholmIconsCodePlusParent onClick={onFrameContainer10Click}>
            <StockholmIconsCodePlus
              alt="stockholmiconsCodePlus"
              src={stockholmiconsCodePlus}
            />
            <CreateOrganizations>Create Board</CreateOrganizations>
          </StockholmIconsCodePlusParent>
        </OrganizationsGroup>
        <CardContainer
          institutionName="Decadev Boards"
          groupIcon={groupIcons}
          navigationIcon={stockholmiconsNavigationAngleright}
          propTop="196px"
          propLeft="306px"
          propWidth="200px"
          onGroupContainer14Click={onGroupContainer14Click}
        />
        <CardContainer
          institutionName="Gloryland College"
          groupIcon={groupIcons}
          navigationIcon={stockholmiconsNavigationAngleright}
          onGroupContainer14Click={onGroupContainer14Click}
          propTop="518px"
          propLeft="306px"
          propWidth="220px"
          propBorder="unset"
          //propCursor="unset"
        />
        <CardContainer
          institutionName="Sterling Bank Boards"
          groupIcon={groupIcons}
          navigationIcon={stockholmiconsNavigationAngleright}
          onGroupContainer14Click={onGroupContainer14Click}
          propTop="196px"
          propLeft="672px"
          propWidth="250px"
          propBorder="unset"
          //propCursor="unset"
        />
        <CardContainer
          institutionName="Lily Hospital"
          groupIcon={groupIcons}
          navigationIcon={stockholmiconsNavigationAngleright}
          onGroupContainer14Click={onGroupContainer14Click}
          propTop="518px"
          propLeft="672px"
          propWidth="150px"
          propBorder="1px solid var(--color-black)"
          //propCursor="unset"
        />
        <CardContainer
          institutionName="Access Bank"
          groupIcon={groupIcons}
          navigationIcon={stockholmiconsNavigationAngleright}
          onGroupContainer14Click={onGroupContainer14Click}
          propTop="196px"
          propLeft="1038px"
          propWidth="150px"
          propBorder="unset"
          //propCursor="unset"
        />
        <CardContainer
          institutionName="Arsenal Football Club"
          groupIcon={groupIcons}
          navigationIcon={stockholmiconsNavigationAngleright}
          onGroupContainer14Click={onGroupContainer14Click}
          propTop="518px"
          propLeft="1038px"
          propWidth="250px"
          propBorder="unset"
          //propCursor="unset"
        />
      </CreateorganizationsadminRoot>
    </>
  );
};

export default BoardLandingPage;
