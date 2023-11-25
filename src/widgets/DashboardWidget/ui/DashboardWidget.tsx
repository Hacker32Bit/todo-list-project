import React from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";

import "./DashboardWidget.css";
import MainCardWidget from "../../MainCardWidget/ui/MainCardWidget";

import { DashboardPageProps, ItemsProps, TasksProps } from "pages/DashboardPage/ui/DashboardPage.interface";
import { DragDropContext } from "react-beautiful-dnd";

const DashboardWidget: React.FC<DashboardPageProps> = ({
  items,
  setItemsState,
}) => {
  const onDragEnd = (result: any) => {
    const { source, destination, draggableId } = result

    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }

    const sourceColumn: ItemsProps = items.find((column) => column.id.toString() === source.droppableId) as ItemsProps
    const destinationColumn: ItemsProps = items.find((column) => column.id.toString() === destination.droppableId) as ItemsProps

    const newSourceCards: TasksProps[] = Array.from(sourceColumn?.tasks as TasksProps[])
    const [removedCard] = newSourceCards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      newSourceCards.splice(destination.index, 0, removedCard)

      const newColumn: ItemsProps = {
        ...sourceColumn,
        tasks: newSourceCards,
      };
    
      setItemsState(items.map((column) => column.id === newColumn.id ? newColumn : column))
    } else {
      const newDestinationCards: TasksProps[] = Array.from(destinationColumn.tasks as TasksProps[]);
      newDestinationCards.splice(destination.index, 0, removedCard);

      const newSourceColumn: ItemsProps = {
        ...sourceColumn,
        tasks: newSourceCards
      }

      const newDestinationColumn: ItemsProps = {
        ...destinationColumn,
        tasks: newDestinationCards
      }

      setItemsState(items.map((column) => {
        if (column.id === newSourceColumn.id) return newSourceColumn;
        if (column.id === newDestinationColumn.id) return newDestinationColumn;
        return column
      }))
    }

  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="board">
        <DragDropContext onDragEnd={onDragEnd}>
          {items.map((el) => {
            return (
              <MainCardWidget
                key={el.id}
                {...el}
                setItemsState={setItemsState}
              />
            );
          })}
        </DragDropContext>
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
