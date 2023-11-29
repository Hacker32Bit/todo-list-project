import { updateDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const updateBoard = createAsyncThunk(
    "boards/updateBoard",
    async ({oldId, newObj}: { oldId: string; newObj: any }) => {
        await updateDoc(doc(db, "boards", oldId), newObj)
        return { oldId, ...newObj }
    }
)