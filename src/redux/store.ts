import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice";
import boardsSlice from "./slices/boardsSlice";
import mainCardsSlices from "./slices/mainCardsSlices";
import cardsSlices from "./slices/cardsSlices";
import commentsSlice from "./slices/commentsSlice";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        users: usersSlice,
        boards: boardsSlice,
        mainCards: mainCardsSlices,
        cards: cardsSlices,
        comments: commentsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch