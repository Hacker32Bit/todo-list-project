import { createSlice } from "@reduxjs/toolkit";
import { createMainCards } from "redux/thunks/MainCards/createMainCards";
import { deleteMainCards } from "redux/thunks/MainCards/deleteMainCards";
import { fetchMainCards } from "redux/thunks/MainCards/fetchMainCards";
import { updateMainCards } from "redux/thunks/MainCards/updateMainCards";

const mainCardsSlice = createSlice({
    name: "mainCards",
    initialState: {
        mainCards: [] as any,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchMainCards.pending as any]: (state) => {
            state.loading = true
        },
        [fetchMainCards.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.mainCards = action.payload;
        },
        [fetchMainCards.rejected as any]: (state, action) => {
            state.loading = false;
            state.mainCards = action.error.message;
        },
        [createMainCards.pending as any]: (state) => {
            state.loading = true
        },
        [createMainCards.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.mainCards.push(action.payload as any)
        },
        [createMainCards.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteMainCards.pending as any]: (state) => {
            state.loading = true
        },
        [deleteMainCards.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.mainCards = state.mainCards.filter((
                (card: any) => card.id !== action.payload
            ))
        },
        [deleteMainCards.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateMainCards.pending as any]: (state) => {
            state.loading = true
        },
        [updateMainCards.fulfilled as any]: (state, action) => {
            state.loading = false;
            const index = state.mainCards.findIndex(
                (card: any) => card.id === action.payload.id
            )
            if (index !== -1) {
                state.mainCards[index] = action.payload
            }
        },
        [updateMainCards.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
})

export default mainCardsSlice.reducer