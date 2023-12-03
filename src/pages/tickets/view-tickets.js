import React, { useState, useRef } from "react";

const App = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list1, setList1] = useState(["Item 1", "Item 2", "Item 3"]);
  const [list2, setList2] = useState(["Item 4", "Item 5", "Item 6"]);
  const [list3, setList3] = useState(["Item 7", "Item 8", "Item 9"]); // New list

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
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        onDragOver={dragOver}
      >
        <div style={{ flex: 1 }}>
          {list1.map((item, index) => (
            <div
              style={{
                backgroundColor: "lightblue",
                margin: "20px",
                textAlign: "center",
                fontSize: "40px",
              }}
              onDragStart={(e) => dragStart(e, index, "list1")}
              onDragEnter={(e) => dragEnter(e, index, "list1")}
              onDragEnd={dragEnd}
              key={index}
              draggable
            >
              {item}
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
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
        </div>
        <div style={{ flex: 1 }}>
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
        </div>
      </div>
    </>
  );
};

export default App;
