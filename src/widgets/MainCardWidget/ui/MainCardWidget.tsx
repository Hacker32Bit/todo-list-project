import React, { useEffect, useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { LuLayoutTemplate } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import CardWidget from "../../CardWidget";

import { ItemsProps } from "pages/DashboardPage/ui/DashboardPage.interface";

import "./MainCardWidget.css";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchCards } from "redux/thunks/Cards/fetchCards";

const MainCardWidget: React.FC<any> = ({
  id,
  uid,
  created,
  title,
  author,
  date,
  tasks,
  setItemsState,
}) => {
  const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const cards = useSelector((state: any) => {
    return state.cards;
  });

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="main-card">
      <div className="title">
        <h3 title={created?.toDate().toString()}>{title}</h3>
        <div
          className="options-btn"
          title="Options"
          onClick={() => setOptionsIsOpen((prev) => !prev)}
        >
          <SlOptions />
        </div>
        {optionsIsOpen ? (
          <div className="options">
            <div className="title">
              <h3>Activity</h3>
              <div
                className="options-btn"
                title="Close"
                onClick={() => setOptionsIsOpen(false)}
              >
                <IoMdClose />
              </div>
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
              {cards?.cards.map((el: any, index: number) => {
                if (id === el.mainCardId) {
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
                }
              })}
            </div>
          );
        }}
      </Droppable>

      <div className="actions">
        {
          
        }
        <div className="add-btn">
          <BsPlusLg />
          <span>Add a card</span>
        </div>
      </div>
    </div>
  );
};

export default MainCardWidget;
