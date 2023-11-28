import { addDoc, collection } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../firebase"

export const createBoard = createAsyncThunk(
    "blog/createBoard",
    async (boardData: any) => {
        const docRef = await addDoc(collection(db, "boards"), boardData)
        return { id: docRef.id, ...boardData }
    }
)