import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import TicketCard from "./TicketCard";
import styled from "styled-components";


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
`;
const InProgress1 = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const App = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]); // New list

  useEffect(() => {
    const fetchData = async (url, setter) => {
      try {
        const response = await axios.get(url);
        const apiData = response.data.data;
        setter(apiData);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };
    const apiUrl1 = "https://localhost:7075/api/Ticket/status-by-pagination/0?page=1&pageSize=5";
    const apiUrl2 = "https://localhost:7075/api/Ticket/status-by-pagination/1?page=1&pageSize=5";
    const apiUrl3 = "https://localhost:7075/api/Ticket/status-by-pagination/2?page=1&pageSize=5";

    fetchData(apiUrl1, setList1);
    fetchData(apiUrl2, setList2);
    fetchData(apiUrl3, setList3);
  }, []); // The empty dependency array ensures that the effect runs only once

  // ... (rest of your code remains unchanged)



  const dragStart = (e, position, sourceList) => {
    dragItem.current = { position, sourceList };
  };

  const dragEnter = (e, position, targetList) => {
    dragOverItem.current = { position, targetList };
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnd = () => {
    if (!dragItem.current || !dragOverItem.current ) return;

    const sourceList =
      dragItem.current.sourceList === "list1"
        ? list1
        : dragItem.current.sourceList === "list2"
        ? list2
        : list3; // Determine the source list
    const targetList =
      dragOverItem.current.targetList === "list1"
        ? list1
        : dragOverItem.current.targetList === "list2"
        ? list2
        : list3; // Determine the target list

    if (targetList === list1) {
      if (sourceList !== list1) {
        const newList1 = [...list1];
        const [draggedItem] = sourceList.splice(dragItem.current.position, 1);
        newList1.splice(dragOverItem.current.position, 0, draggedItem);
        setList1(newList1);
        const response =  axios.post("https://localhost:7075/api/Ticket/edit-ticket/1");
        console.log(draggedItem.id);
      }
    } else if (targetList === list2) {
      if (sourceList !== list2) {
        const newList2 = [...list2];
        const [draggedItem] = sourceList.splice(dragItem.current.position, 1);
        newList2.splice(dragOverItem.current.position, 0, draggedItem);
        setList2(newList2);
      }
    } else if (targetList === list3) {
      if (sourceList !== list3) {
        const newList3 = [...list3];
        const [draggedItem] = sourceList.splice(dragItem.current.position, 1);
        newList3.splice(dragOverItem.current.position, 0, draggedItem);
        setList3(newList3);
      }
    }

    dragItem.current = null;
    dragOverItem.current = null;
  };
  

  return (
    <>
      <div  style={{ display: "flex", justifyContent: "space-around" }} onDragOver={dragOver} >
        <div style={{ flex: 1,marginTop:'2em', marginLeft:'20em',marginRight:'2em', backgroundColor:'white'}} >
          <div style={{fontWeight:'bold',margin:'1em'}}onDragEnter={(e) => dragEnter(e, "list1")}
                onDragEnd={dragEnd}
                draggable>Pending</div>
          
            {list1.map((item, index) => (
              <div style={{margin:'1em' }}
                onDragStart={(e) => dragStart(e, index, "list1")}
                onDragEnter={(e) => dragEnter(e, index, "list1")}
                onDragEnd={dragEnd}
                key={index}
                draggable
              >
                <TicketCard reference={item.ticketReference} date={item.createdAt} description={item.description} key={index} title={item.title}  priority={item.priority===0?'Low':item.priority===1?'Medium':'High'} />   
              </div>
            ))}     

         </div>
         
        <div style={{ flex: 1,backgroundColor:'white',margin:'2em' }}>
        <div style={{fontWeight:'bold',margin:'1em'}}>In Progress</div>
          {list2.map((item, index) => (
            <div style={{ margin:'1em' }}
              onDragStart={(e) => dragStart(e, index, "list2")}
              onDragEnter={(e) => dragEnter(e, index, "list2")}
              onDragEnd={dragEnd}
              key={index}
              draggable
            >
                <TicketCard reference={item.ticketReference} date={item.createdAt} description={item.description} key={index} title={item.title}  priority={item.priority===0?'Low':item.priority===1?'Medium':'High'} />   
             </div>
          ))}
        </div>
        <div style={{ flex: 1 ,backgroundColor:'white',margin:'2em' }}>
        <div style={{fontWeight:'bold',margin:'1em'}}>Completed</div>
          {list3.map((item, index) => (
            <div style={{ backgroundColor: "lightblue",  margin: "20px"}}
              onDragStart={(e) => dragStart(e, index, "list3")}
              onDragEnter={(e) => dragEnter(e, index, "list3")}
              onDragEnd={dragEnd}
              key={index}
              draggable
            >
               <TicketCard reference={item.ticketReference} date={item.createdAt} description={item.description} key={index} title={item.title}  priority={item.priority===0?'Low':item.priority===1?'Medium':'High'} />   
             </div>
          ))}
        </div>
        {/* <div style={{ flex: 1 }}>
          {list2.map((item, index) => (
            <div
              style={{
                backgroundColor: "lightgreen",
                margin: "20px",
                textAlign: "center",
                fontSize: "40px",
              }}
              onDragStart={(e) => dragStart(e, index, "list2")}
              onDragEnter={(e) => dragEnter(e, index, "list2")}
              onDragEnd={dragEnd}
              key={index}
              draggable
            >
              {item}
            </div>
          ))}
        </div> */}
        {/* <div style={{ flex: 1 }}>
          {list3.map((item, index) => (
            <div
              style={{
                backgroundColor: "lightcoral",
                margin: "20px",
                textAlign: "center",
                fontSize: "40px",
              }}
              onDragStart={(e) => dragStart(e, index, "list3")}
              onDragEnter={(e) => dragEnter(e, index, "list3")}
              onDragEnd={dragEnd}
              key={index}
              draggable
            >
              {item}
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default App;
