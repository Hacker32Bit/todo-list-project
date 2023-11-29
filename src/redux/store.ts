import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice";
import boardsSlice from "./slices/boardsSlice";
import mainCardsSlices from "./slices/mainCardsSlices";
import cardsSlices from "./slices/cardsSlices";

export const store = configureStore({
    reducer: {
        user: userSlice,
        boards: boardsSlice,
        mainCards: mainCardsSlices,
        cards: cardsSlices,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch