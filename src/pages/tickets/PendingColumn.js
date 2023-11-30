import styled from "styled-components";
import TicketCard from "./TicketCard";

const InProgress1 = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;
const Medium = styled.div`
  position: relative;
`;
const Prioritymedium = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-burlywood);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-5xs);
`;
const AddMoreUser = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-weight: 500;
  display: inline-block;
  width: 250px;
`;
const Tagmobile = styled.div`
  border-radius: var(--br-9xs);
  background-color: var(--color-deeppink);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs);
`;
const Tagweb = styled.div`
  border-radius: var(--br-9xs);
  background-color: var(--color-mediumblue);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs);
`;
const TagmobileParent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  color: var(--color-gray-100);
`;
const Mar32020 = styled.div`
  position: relative;
  font-size: var(--font-size-2xs);
  color: var(--support-dark-grey);
  display: none;
`;
const Useruser01Icon = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
`;
const Useruser01Parent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Cardnormal = styled.div`
  border-radius: var(--br-9xs);
  background-color: var(--color-white);
  border: 1px solid var(--support-dark-grey);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs);
  gap: var(--gap-5xs);
`;
const Prioritylow = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-darkseagreen);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-5xs);
`;
const Tagmobile1 = styled.div`
  border-radius: var(--br-9xs);
  background-color: var(--color-deeppink);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs);
`;
const Mar320201 = styled.div`
  position: relative;
  font-size: var(--font-size-2xs);
  color: var(--support-dark-grey);
`;
const Useruser2Icon1 = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
  display: none;
`;
const Tagweb2 = styled.div`
  border-radius: var(--br-9xs);
  background-color: var(--color-mediumblue);
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs);
`;
const Useruser01Parent1 = styled.div`
  overflow: hidden;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const InProgressRoot = styled.div`
  position: relative;
  border-radius: var(--br-9xs);
  background-color: var(--support-white-grey);
  border: 1px solid var(--support-light-grey);
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px;
  gap: 16px;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--primary-black);
  font-family: var(--font-poppins);
`;
const Bod = styled.div`

/* fonts */
--font-poppins: Poppins;

/* font sizes */
--font-size-2xs: 11px;
--font-size-3xs: 10px;
--font-size-xs: 12px;

/* Colors */
--support-white-grey: #f9f9f9;
--support-light-grey: #e5e5e5;
--color-white: #fff;
--support-dark-grey: #666;
--color-mediumblue: #4f1dde;
--primary-black: #221c1d;
--color-gray-100: rgba(255, 255, 255, 0.9);
--color-deeppink: #de1d6e;
--color-darkseagreen: #b8ebb0;
--color-burlywood: #f0ca81;

/* Gaps */
--gap-5xs: 8px;

/* Paddings */
--padding-5xs: 8px;
--padding-9xs: 4px;

/* Border radiuses */
--br-9xs: 4px;
--br-xl: 20px;
`

const Pending = () => {
  const title = 'Introduction to computer science and everything related to programming';
  const title2 = 'Title 2';
  const title3 = 'Title 3';
  const priorityh = 'High';
  const priorityl = 'Low';
  const prioritym = 'Medium';
  return (
    <Bod>
    <InProgressRoot>
      <InProgress1>Pending</InProgress1>
      <TicketCard title={title}priority={prioritym}/> 
      <TicketCard title={title2} priority={priorityh} />       
      <TicketCard title={title3}  priority={priorityl} />      
    </InProgressRoot>
    </Bod>
  );
};

export default Pending;
