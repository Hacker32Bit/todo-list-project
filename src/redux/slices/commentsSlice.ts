import { createSlice } from "@reduxjs/toolkit";
import { createComments } from "redux/thunks/Comments/createComments";
import { deleteComments } from "redux/thunks/Comments/deleteComments";
import { fetchComments } from "redux/thunks/Comments/fetchComments";
import { updateComments } from "redux/thunks/Comments/updateComments";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [] as any,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchComments.pending as any]: (state) => {
            state.loading = true
        },
        [fetchComments.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.comments = action.payload;
        },
        [fetchComments.rejected as any]: (state, action) => {
            state.loading = false;
            state.comments = action.error.message;
        },
        [createComments.pending as any]: (state) => {
            state.loading = true
        },
        [createComments.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.comments.push(action.payload as any)
        },
        [createComments.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteComments.pending as any]: (state) => {
            state.loading = true
        },
        [deleteComments.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.comments = state.comments.filter((
                (comments: any) => comments.id !== action.payload
            ))
        },
        [deleteComments.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateComments.pending as any]: (state) => {
            state.loading = true
        },
        [updateComments.fulfilled as any]: (state, action) => {
            state.loading = false;
            const index = state.comments.findIndex(
                (comments: any) => comments.id === action.payload.id
            )
            if (index !== -1) {
                state.comments[index] = action.payload
            }
        },
        [updateComments.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
})

export default commentsSlice.reducer