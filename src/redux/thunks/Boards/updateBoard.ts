import { updateDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"
import { BoardsProps } from "redux/store.interfaces";

export const updateBoard = createAsyncThunk(
    "boards/updateBoard",
    async ({oldId, newObj}: { oldId: string; newObj: BoardsProps }) => {
        await updateDoc(doc(db, "boards", oldId), newObj as any)
        return { oldId, ...newObj }
    }
)