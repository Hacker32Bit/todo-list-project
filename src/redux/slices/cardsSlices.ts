import { createSlice } from "@reduxjs/toolkit";
import { createCards } from "redux/thunks/Cards/createCards";
import { deleteCards } from "redux/thunks/Cards/deleteCards";
import { fetchCards } from "redux/thunks/Cards/fetchCards";
import { updateCards } from "redux/thunks/Cards/updateCards";

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [] as any,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchCards.pending as any]: (state) => {
            state.loading = true
        },
        [fetchCards.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.cards = action.payload;
        },
        [fetchCards.rejected as any]: (state, action) => {
            state.loading = false;
            state.cards = action.error.message;
        },
        [createCards.pending as any]: (state) => {
            state.loading = true
        },
        [createCards.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.cards.push(action.payload as any)
        },
        [createCards.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteCards.pending as any]: (state) => {
            state.loading = true
        },
        [deleteCards.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.cards = state.cards.filter((
                (card: any) => card.id !== action.payload
            ))
        },
        [deleteCards.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateCards.pending as any]: (state) => {
            state.loading = true
        },
        [updateCards.fulfilled as any]: (state, action) => {
            state.loading = false;
            const index = state.cards.findIndex(
                (card: any) => card.id === action.payload.id
            )
            if (index !== -1) {
                state.cards[index] = action.payload
            }
        },
        [updateCards.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
})

export default cardsSlice.reducer