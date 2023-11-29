import { deleteDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const deleteCards = createAsyncThunk(
    "cards/deleteCards",
    async (cardId: string) => {
        await deleteDoc(doc(db, "cards", cardId))
        return cardId;
    }
)