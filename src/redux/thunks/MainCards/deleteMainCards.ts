import { deleteDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const deleteMainCards = createAsyncThunk(
    "mainCards/deleteMainCards",
    async (mainCardId: string) => {
        await deleteDoc(doc(db, "mainCards", mainCardId))
        return mainCardId;
    }
)