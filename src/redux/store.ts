import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice";
import boardsSlice from "./slices/boardsSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        boards: boardsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch