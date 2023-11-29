import { FaSave, FaTrashAlt } from "react-icons/fa";
import "./BoardWidget.css";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardWidget: React.FC<any> = ({
  board,
  deleteBoardFunction,
  editBoardFunction,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editNewTitle, setEditNewTitle] = useState<string>(board.boardName);
  const navigate = useNavigate()

  return (
    <div className="board-card" onClick={() => navigate(`../dashboard/${board.id}`)}>
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
                await editBoardFunction(board.id, editNewTitle);
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
      <h5 title={board.created.toDate().toString()}>
        {board.created.toDate().toDateString()}
      </h5>

      <button
        className="delete"
        onClick={async () => deleteBoardFunction(board.id)}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default BoardWidget;
