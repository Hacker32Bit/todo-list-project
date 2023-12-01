import { createSlice } from "@reduxjs/toolkit";
import { createUsers } from "redux/thunks/Users/createUsers";
import { deleteUsers } from "redux/thunks/Users/deleteUsers";
import { fetchUsers } from "redux/thunks/Users/fetchUsers";
import { updateUsers } from "redux/thunks/Users/updateUsers";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [] as any,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.pending as any]: (state) => {
            state.loading = true
        },
        [fetchUsers.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [fetchUsers.rejected as any]: (state, action) => {
            state.loading = false;
            state.users = action.error.message;
        },
        [createUsers.pending as any]: (state) => {
            state.loading = true
        },
        [createUsers.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload as any)
        },
        [createUsers.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteUsers.pending as any]: (state) => {
            state.loading = true
        },
        [deleteUsers.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.users = state.users.filter((
                (user: any) => user.id !== action.payload
            ))
        },
        [deleteUsers.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateUsers.pending as any]: (state) => {
            state.loading = true
        },
        [updateUsers.fulfilled as any]: (state, action) => {
            state.loading = false;
            const index = state.users.findIndex(
                (user: any) => user.id === action.payload.id
            )
            if (index !== -1) {
                state.users[index] = action.payload
            }
        },
        [updateUsers.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
})

export default usersSlice.reducer