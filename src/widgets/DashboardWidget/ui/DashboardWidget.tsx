import React, { useEffect, useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";

import "./DashboardWidget.css";
import MainCardWidget from "../../MainCardWidget/ui/MainCardWidget";

import {
  DashboardPageProps,
  ItemsProps,
  TasksProps,
} from "pages/DashboardPage/ui/DashboardPage.interface";
import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { fetchMainCards } from "redux/thunks/MainCards/fetchMainCards";
import { Timestamp } from "@firebase/firestore";
import { createMainCards } from "redux/thunks/MainCards/createMainCards";
import { deleteMainCards } from "redux/thunks/MainCards/deleteMainCards";
import { updateMainCards } from "redux/thunks/MainCards/updateMainCards";
import { updateCards } from "redux/thunks/Cards/updateCards";
import { fetchCards } from "redux/thunks/Cards/fetchCards";

const DashboardWidget: React.FC<any> = ({ user, items, setItemsState }) => {
  const { boardId } = useParams<{ boardId: string }>();

  const dispatch = useAppDispatch();
  const mainCards = useSelector((state: any) => {
    return state.mainCards;
  });
  const userUid = useSelector((state: any) => {
    return state.user.profile.uid;
  });
  const cards = useSelector((state: any) => {
    return state.cards;
  });
  const boardName = useSelector((state: any) => {
    return state.boards.boards.find((el: any) => el.id === boardId).boardName;
  });

  const [createIsOpen, setCreateIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const handleCreateMainCard = () => {
    if (title.length > 23 || title.replaceAll(" ", "").length === 0) {
      alert("Title must be have at least 1 character and not above 23");
      return;
    }
    dispatch(
      createMainCards({
        title,
        created: Timestamp.fromDate(new Date()),
        uid: userUid,
        boardId,
      })
    );

    setTitle("");
    setCreateIsOpen(false);
  };

  const deleteMainCardFunction = async (id: string) => {
    console.log("Delete", id);
    await dispatch(deleteMainCards(id));
    dispatch(fetchMainCards());
  };

  const editMainCardFunction = async (oldId: string, title: string) => {
    const oldObj = {
      ...mainCards.mainCards.find((el: any) => el.id === oldId),
      title,
    };
    const { id, ...newObj } = oldObj;
    //console.log(newObj);
    await dispatch(updateMainCards({ oldId, newObj }));
    dispatch(fetchMainCards());
  };

  const editCardFunction = async (sourceId: string, newId: string) => {
    const oldObj = {
      ...cards.cards.find((el: any) => el.id === sourceId),
      mainCardId: newId,
    };

    const { id, ...newObj } = oldObj;
    const oldId = id
    console.log("oldId: ", oldId, "newObj: ", newObj);
    await dispatch(updateCards({ oldId, newObj }));
    dispatch(fetchCards());
  };

  const onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result;

    console.log("draggableId: ", draggableId, "destination: ", destination);

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }


    editCardFunction(draggableId, destination.droppableId)

    // const sourceColumn: ItemsProps = items.find(
    //   (column: any) => column.id.toString() === source.droppableId
    // ) as ItemsProps;
    // const destinationColumn: ItemsProps = items.find(
    //   (column: any) => column.id.toString() === destination.droppableId
    // ) as ItemsProps;

    // const newSourceCards: TasksProps[] = Array.from(
    //   sourceColumn?.tasks as TasksProps[]
    // );
    // const [removedCard] = newSourceCards.splice(source.index, 1);

    // if (source.droppableId === destination.droppableId) {
    //   newSourceCards.splice(destination.index, 0, removedCard);

    //   const newColumn: ItemsProps = {
    //     ...sourceColumn,
    //     tasks: newSourceCards,
    //   };

    //   setItemsState(
    //     items.map((column: any) =>
    //       column.id === newColumn.id ? newColumn : column
    //     )
    //   );
    // } else {
    //   const newDestinationCards: TasksProps[] = Array.from(
    //     destinationColumn.tasks as TasksProps[]
    //   );
    //   newDestinationCards.splice(destination.index, 0, removedCard);

    //   const newSourceColumn: ItemsProps = {
    //     ...sourceColumn,
    //     tasks: newSourceCards,
    //   };

    //   const newDestinationColumn: ItemsProps = {
    //     ...destinationColumn,
    //     tasks: newDestinationCards,
    //   };

    //   setItemsState(
    //     items.map((column: any) => {
    //       if (column.id === newSourceColumn.id) return newSourceColumn;
    //       if (column.id === newDestinationColumn.id)
    //         return newDestinationColumn;
    //       return column;
    //     })
    //   );
    // }
  };

  useEffect(() => {
    dispatch(fetchMainCards());
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1>{boardName}</h1>
      <div className="board">
        {mainCards.loading ? (
          <h1>Loading...</h1>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            {mainCards.mainCards.map((el: any) => {
              //console.log(el, el.id, "Main card ID")
              if (el.boardId === boardId && el.uid === user.profile.uid) {
                return (
                  <MainCardWidget
                    key={el.id}
                    {...el}
                    editMainCardFunction={editMainCardFunction}
                    deleteMainCardFunction={deleteMainCardFunction}
                  />
                );
              }
            })}
          </DragDropContext>
        )}
        {createIsOpen ? (
          <div className="create-main-card">
            <input
              placeholder="Type main card name"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <button className="btn" onClick={handleCreateMainCard}>
              Create
            </button>
          </div>
        ) : (
          <div className="add-maincard">
            <button
              title="Add another list"
              onClick={() => setCreateIsOpen(true)}
            >
              <MdOutlineAddToPhotos />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardWidget;
