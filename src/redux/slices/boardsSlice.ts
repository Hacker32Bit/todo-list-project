import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createBoard } from "redux/thunks/createBoard";
import { fetchBoards } from "redux/thunks/fetchBoards";

const boardsSlice = createSlice({
    name: "boards",
    initialState: {
        boards: [] as any,
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
            state.boards.push(action.payload as any)
        },
        [createBoard.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
})

export default boardsSlice.reducer