import { createSlice } from "@reduxjs/toolkit";
import { loginWithEmail } from "redux/thunks/Auth/loginWithEmail";
import { loginWithGithub } from "redux/thunks/Auth/loginWithGithub";
import { loginWithGoogle } from "redux/thunks/Auth/loginWithGoogle";
import { registerWithEmail } from "redux/thunks/Auth/registerWithEmail";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        error: null,
        profile: null,
    },
    reducers: {},
    extraReducers: {
        [loginWithGoogle.pending as any]: (state) => {
            state.loading = true;
        },
        [loginWithGoogle.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        },
        [loginWithGoogle.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [loginWithGithub.pending as any]: (state) => {
            state.loading = true;
        },
        [loginWithGithub.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        },
        [loginWithGithub.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [loginWithEmail.pending as any]: (state) => {
            state.loading = true;
        },
        [loginWithEmail.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        },
        [loginWithEmail.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [registerWithEmail.pending as any]: (state) => {
            state.loading = true;
        },
        [registerWithEmail.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        },
        [registerWithEmail.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
    }
})

export default userSlice.reducer