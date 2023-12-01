import { createSlice } from "@reduxjs/toolkit";
import { BoardsProps } from "redux/store.interfaces";
import { createBoard } from "redux/thunks/Boards/createBoard";
import { deleteBoard } from "redux/thunks/Boards/deleteBoard";
import { fetchBoards } from "redux/thunks/Boards/fetchBoards";
import { updateBoard } from "redux/thunks/Boards/updateBoard";

const boardsSlice = createSlice({
    name: "boards",
    initialState: {
        boards: [] as BoardsProps[],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchBoards.pending as any]: (state) => {
            state.loading = true
        },
        [fetchBoards.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.boards = action.payload;
        },
        [fetchBoards.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [createBoard.pending as any]: (state) => {
            state.loading = true
        },
        [createBoard.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.boards.push(action.payload as BoardsProps)
        },
        [createBoard.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteBoard.pending as any]: (state) => {
            state.loading = true
        },
        [deleteBoard.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.boards = state.boards.filter((
                (board: BoardsProps) => board.id !== action.payload
            ))
        },
        [deleteBoard.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateBoard.pending as any]: (state) => {
            state.loading = true
        },
        [updateBoard.fulfilled as any]: (state, action) => {
            state.loading = false;
            const index = state.boards.findIndex(
                (board: BoardsProps) => board.id === action.payload.id
            )
            if (index !== -1) {
                state.boards[index] = action.payload
            }
        },
        [updateBoard.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
})

export default boardsSlice.reducer