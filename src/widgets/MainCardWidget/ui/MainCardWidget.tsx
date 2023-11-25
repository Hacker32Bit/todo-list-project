import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { LuLayoutTemplate } from "react-icons/lu";
import CardWidget from "../../CardWidget";

import { ItemsProps } from "pages/DashboardPage/ui/DashboardPage.interface";

import "./MainCardWidget.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const MainCardWidget: React.FC<ItemsProps> = ({
  id,
  mainTitle,
  author,
  date,
  tasks,
  setItemsState,
}) => {
  return (
    <div className="main-card">
      <div className="title">
        <h3>{mainTitle}</h3>
        <div className="options-btn" title="Options">
          <SlOptions />
        </div>
      </div>
      <Droppable droppableId={id.toString()} key={id}>
        {(provider) => {
          return (
            <div
              {...provider.droppableProps}
              ref={provider.innerRef}
              className="droppable-wrapper"
            >
              {tasks?.map((el, index) => {
                return (
                  <Draggable key={el.id} draggableId={el.id.toString()} index={index}>
                    {(provider) => {
                      return (
                        <div
                          className="draggable-wrapper"
                          ref={provider.innerRef}
                          {...provider.dragHandleProps}
                          {...provider.draggableProps}
                        >
                          <CardWidget key={el.id} card={el} />
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
            </div>
          );
        }}
      </Droppable>

      <div className="actions">
        <div className="add-btn">
          <BsPlusLg />
          <span>Add a card</span>
        </div>
        <div className="mark-all-btn" title="Create from template">
          <LuLayoutTemplate />
        </div>
      </div>
    </div>
  );
};

export default MainCardWidget;
