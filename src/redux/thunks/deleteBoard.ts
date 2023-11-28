import { deleteDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../firebase"

export const deleteBoard = createAsyncThunk(
    "blog/deleteBoard",
    async (boardId: string) => {
        await deleteDoc(doc(db, "boards", boardId))
    }
)