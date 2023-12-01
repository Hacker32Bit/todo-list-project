import { BoardsProps } from "redux/store.interfaces";

export interface BoardWidgetProps {
    board: BoardsProps;
    deleteBoardFunction: (boardId: string) => void;
    editBoardFunction: (boardId: string, editNewTitle: string) => void;
}