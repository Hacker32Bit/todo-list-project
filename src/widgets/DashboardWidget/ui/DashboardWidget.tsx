import React, { useEffect } from "react";
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

const DashboardWidget: React.FC<any> = ({
  user,
  items,
  setItemsState,
}) => {
  const { boardId } = useParams<{ boardId: string }>();

  const dispatch = useAppDispatch();
  const mainCards = useSelector((state: any) => {
    return state.mainCards;
  });

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceColumn: ItemsProps = items.find(
      (column: any) => column.id.toString() === source.droppableId
    ) as ItemsProps;
    const destinationColumn: ItemsProps = items.find(
      (column: any) => column.id.toString() === destination.droppableId
    ) as ItemsProps;

    const newSourceCards: TasksProps[] = Array.from(
      sourceColumn?.tasks as TasksProps[]
    );
    const [removedCard] = newSourceCards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      newSourceCards.splice(destination.index, 0, removedCard);

      const newColumn: ItemsProps = {
        ...sourceColumn,
        tasks: newSourceCards,
      };

      setItemsState(
        items.map((column: any) => (column.id === newColumn.id ? newColumn : column))
      );
    } else {
      const newDestinationCards: TasksProps[] = Array.from(
        destinationColumn.tasks as TasksProps[]
      );
      newDestinationCards.splice(destination.index, 0, removedCard);

      const newSourceColumn: ItemsProps = {
        ...sourceColumn,
        tasks: newSourceCards,
      };

      const newDestinationColumn: ItemsProps = {
        ...destinationColumn,
        tasks: newDestinationCards,
      };

      setItemsState(
        items.map((column: any) => {
          if (column.id === newSourceColumn.id) return newSourceColumn;
          if (column.id === newDestinationColumn.id)
            return newDestinationColumn;
          return column;
        })
      );
    }
  };

  useEffect(() => {
    dispatch(fetchMainCards());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="board">
        {mainCards.loading ? (
          <h1>Loading...</h1>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            {mainCards.mainCards.map((el: any) => {
              console.log(el, el.id, "Main card ID")
              if (el.boardId === boardId && el.uid === user.profile.uid) {
                return <MainCardWidget key={el.id} {...el} />;
              }
            })}
          </DragDropContext>
        )}

        <div className="add-maincard">
          <button title="Add another list">
            <MdOutlineAddToPhotos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
