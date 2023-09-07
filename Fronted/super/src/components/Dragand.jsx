
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DraggableList = () => {
  const [items, setItems] = useState([
    { id: "item-1", content: "Item 1" },
    { id: "item-2", content: "Item 2" },
    { id: "item-3", content: "Item 3" },
    { id: "item-4", content: "Item 4" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return; 

    const { source, destination } = result;

   
    const updatedItems = Array.from(items);
    const [removed] = updatedItems.splice(source.index, 1);
    updatedItems.splice(destination.index, 0, removed);

    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <div>
        <div > store item in this Container</div>
      </div>
    </DragDropContext>
  );
};

export default DraggableList;
