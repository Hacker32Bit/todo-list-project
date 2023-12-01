import { FaSave, FaTrashAlt } from "react-icons/fa";
import "./BoardWidget.css";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardWidgetProps } from "./BoardWidget.interfaces";

const BoardWidget: React.FC<BoardWidgetProps> = ({
  board,
  deleteBoardFunction,
  editBoardFunction,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editNewTitle, setEditNewTitle] = useState<string>(
    board.boardName as string
  );
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (
      isEdit ||
      (e.target as HTMLInputElement).className === "edit" ||
      (e.target as HTMLInputElement).className === "delete" ||
      (e.target as HTMLInputElement).tagName === "path" ||
      (e.target as HTMLInputElement).tagName === "svg"
    ) {
      return;
    }

    navigate(`../dashboard/${board?.id}`);
  };
  const boardId = board.id as string;

  return (
    <div className="board-card" onClick={handleClick}>
      <div className="title">
        {isEdit ? (
          <>
            <input
              value={editNewTitle}
              onChange={(e) => setEditNewTitle(e.target.value)}
              placeholder="Type board title"
            ></input>
            <button
              className="save"
              onClick={async () => {
                await editBoardFunction(boardId, editNewTitle);
                setIsEdit(false);
              }}
            >
              <FaSave />
            </button>
          </>
        ) : (
          <>
            <h3>{board.boardName}</h3>
            <button className="edit" onClick={() => setIsEdit(true)}>
              <FaRegPenToSquare />
            </button>
          </>
        )}
      </div>
      <h5 title={board.created?.toDate().toString()}>
        {board.created?.toDate().toDateString()}
      </h5>

      <button
        className="delete"
        onClick={async () => deleteBoardFunction(boardId)}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default BoardWidget;
