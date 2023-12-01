import BoardWidget from "widgets/BoardWidget";
import "./BoardsWidget.css";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchBoards } from "redux/thunks/Boards/fetchBoards";
import { createBoard } from "redux/thunks/Boards/createBoard";
import { Timestamp } from "@firebase/firestore";
import { deleteBoard } from "redux/thunks/Boards/deleteBoard";
import { updateBoard } from "redux/thunks/Boards/updateBoard";

const BoardsWidget: React.FC = () => {
  const dispatch = useAppDispatch();
  const boards = useSelector((state: any) => {
    return state.boards;
  });

  const userUid = useSelector((state: any) => {
    return state.user.profile.uid;
  });

  const [createIsOpen, setCreateIsOpen] = useState<boolean>(false);
  const [boardName, setBoardName] = useState<string>("");


  const handleCreateBoard = () => {
    if (boardName.length > 30 || boardName.replaceAll(" ", "").length === 0) return;
    dispatch(
      createBoard({
        boardName,
        created: Timestamp.fromDate(new Date()),
        uid: userUid,
      })
    );

    setBoardName("");
    setCreateIsOpen(false);
  };

  const deleteBoardFunction = async (id: string) => {
    console.log("Delete", id);
    await dispatch(deleteBoard(id));
    dispatch(fetchBoards())
  };

  const editBoardFunction = async (oldId: string, title: string) => {
    const oldObj = {
      ...boards.boards.find((el: any) => el.id === oldId),
      boardName: title,
    };
    const { id, ...newObj } = oldObj;
    console.log(newObj);
    await dispatch(updateBoard({ oldId, newObj }));
    dispatch(fetchBoards())
  };

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1>Boards</h1>
      <div className="board">
        {
        boards.loading ? (<BoardWidget loading={true}/>) : (
        boards.boards
          ? boards.boards.map((item: any) => {
              if (item.uid === userUid)
                return (
                  <BoardWidget
                    key={item.id}
                    board={item}
                    deleteBoardFunction={deleteBoardFunction}
                    editBoardFunction={editBoardFunction}
                  />
                );
            })
          : null)}
        <div className="add-board">
          {createIsOpen ? (
            <div className="create-board">
              <input
                placeholder="Type board name"
                type="text"
                value={boardName}
                onChange={(e) => {
                  setBoardName(e.target.value);
                }}
              ></input>
              <button className="btn" onClick={handleCreateBoard}>
                Create
              </button>
            </div>
          ) : (
            <button
              title="Create new board"
              onClick={() => setCreateIsOpen(true)}
            >
              <MdOutlineAddToPhotos />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardsWidget;
