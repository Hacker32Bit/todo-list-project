import { addDoc, collection } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"
import { BoardsProps } from "redux/store.interfaces"

export const createBoard = createAsyncThunk(
    "boards/createBoard",
    async (boardData: BoardsProps) => {
        const docRef = await addDoc(collection(db, "boards"), boardData)
        return { id: docRef.id , ...boardData }
    }
)