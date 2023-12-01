import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import CardWidget from "../../CardWidget";


import "./MainCardWidget.css";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchCards } from "redux/thunks/Cards/fetchCards";
import { FaSave } from "react-icons/fa";
import { createCards } from "redux/thunks/Cards/createCards";
import { Timestamp } from "@firebase/firestore";
import { deleteCards } from "redux/thunks/Cards/deleteCards";
import { updateCards } from "redux/thunks/Cards/updateCards";
import { RootState } from "redux/store";
import { CardsProps } from "redux/store.interfaces";
import { MainCardWidgetProps } from "./MainCardWidget.interfaces";

const MainCardWidget: React.FC<MainCardWidgetProps> = ({
  id,
  created,
  title,
  editMainCardFunction,
  deleteMainCardFunction,
}) => {
  const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false);
  const [addCardIsOpen, setAddCardIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editNewTitle, setEditNewTitle] = useState<string>(title);
  const [addTitle, setAddTitle] = useState<string>("");

  const dispatch = useAppDispatch();
  const cards = useSelector((state: RootState) => {
    return state.cards;
  });
  const userUid = useSelector((state: any) => {
    return state.user.profile.uid;
  });

  const handleCreateCard = () => {
    if (addTitle.length > 100 || addTitle.replaceAll(" ", "").length === 0) {
      alert("Title must be have at least 1 character and not above 100");
      return;
    }
    dispatch(
      createCards({
        title: addTitle,
        created: Timestamp.fromDate(new Date()),
        uid: userUid,
        mainCardId: id,
        description: "",
      })
    );

    setAddTitle("");
    setAddCardIsOpen(false);
  };

  const deleteCardFunction = async (id: string) => {
    console.log("Delete", id);
    await dispatch(deleteCards(id));
    dispatch(fetchCards());
  };

  const editCardFunction = async (oldId: string, title: string) => {
    if (title.length > 100 || title.replaceAll(" ", "").length === 0) {
      alert("Title must be have at least 1 character and not above 100");
      return;
    }
    
    const oldObj = {
      ...cards.cards.find((el: CardsProps) => el.id === oldId),
      title,
    };
    const { id, ...newObj } = oldObj;
    console.log(newObj);
    await dispatch(updateCards({ oldId, newObj }));
    dispatch(fetchCards());
  };

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="main-card">
      <div className="title">
        {isEdit ? (
          <>
            <input
              value={editNewTitle}
              onChange={(e) => setEditNewTitle(e.target.value)}
              placeholder="Type main card title"
            ></input>
            <button
              className="save"
              onClick={async () => {
                await editMainCardFunction(id, editNewTitle);
                setIsEdit(false);
              }}
            >
              <FaSave />
            </button>
          </>
        ) : (
          <h3 title={created?.toDate().toString()}>{title}</h3>
        )}
        {isEdit ? null : (
          <div
            className="options-btn"
            title="Options"
            onClick={() => setOptionsIsOpen((prev) => !prev)}
          >
            <SlOptions />
          </div>
        )}
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
              <Link
                to="#"
                onClick={() => {
                  setIsEdit(true);
                  setOptionsIsOpen(false);
                }}
              >
                <li>Rename main card</li>
              </Link>
              <Link to="#">
                <li>Move all cards in this list...</li>
              </Link>
              <Link to="#">
                <li>Delete all cards inside...</li>
              </Link>
              <Link to="#" onClick={() => deleteMainCardFunction(id)}>
                <li>Delete main card and cards...</li>
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
              {cards?.cards.map((el: CardsProps, index: number) => {
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
                            {...provider.draggableProps}
                          >
                            <CardWidget
                              provider={provider}
                              key={el.id}
                              {...el}
                              deleteCardFunction={deleteCardFunction}
                              editCardFunction={editCardFunction}
                            />
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                }
                return null;
              })}
            </div>
          );
        }}
      </Droppable>

      <div className="actions">
        {addCardIsOpen ? (
          <>
            <input
              value={addTitle}
              onChange={(e) => setAddTitle(e.target.value)}
              placeholder="Type card name"
            ></input>
            <button
              className="save"
              onClick={async () => {
                handleCreateCard();
                setAddCardIsOpen(false);
              }}
            >
              <FaSave />
            </button>
          </>
        ) : (
          <div
            className="add-btn"
            onClick={() => {
              setAddCardIsOpen(true);
            }}
          >
            <BsPlusLg />
            <span>Add a card</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCardWidget;
