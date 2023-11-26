import React, { useEffect, useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { LuLayoutTemplate } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"
import CardWidget from "../../CardWidget";

import { ItemsProps } from "pages/DashboardPage/ui/DashboardPage.interface";

import "./MainCardWidget.css";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";

const MainCardWidget: React.FC<ItemsProps> = ({
  id,
  mainTitle,
  author,
  date,
  tasks,
  setItemsState,
}) => {
  const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false);

  return (
    <div className="main-card">
      <div className="title">
        <h3>{mainTitle}</h3>
        <div className="options-btn" title="Options" onClick={() => setOptionsIsOpen((prev) => !prev)}>
          <SlOptions />
        </div>
        {optionsIsOpen ? (
          <div className="options">
            <div className="title">
              <h3>Activity</h3>
              <div className="options-btn" title="Close" onClick={() => setOptionsIsOpen(false)}><IoMdClose /></div>
            </div>
            <ul className="options-menu">
              <Link to="#">
                <li>Copy list...</li>
              </Link>
              <Link to="#">
                <li>Move list...</li>
              </Link>
              <Link to="#">
                <li>Watch</li>
              </Link>
            </ul>
            <div className="line"></div>
            <ul className="options-menu">
            <Link to="#">
                <li>Sort by...</li>
              </Link>
            </ul>
            <div className="line"></div>
            <ul className="options-menu">
              <Link to="#">
                <li>Move all cards in this list...</li>
              </Link>
              <Link to="#">
                <li>Archive all cards in this list...</li>
              </Link>
              <Link to="#">
                <li>Archive this list</li>
              </Link>
            </ul>
          </div>
        ) : null}
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
                  <Draggable
                    key={el.id}
                    draggableId={el.id.toString()}
                    index={index}
                  >
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
