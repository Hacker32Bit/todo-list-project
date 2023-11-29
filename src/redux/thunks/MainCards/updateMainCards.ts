import { updateDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const updateMainCards = createAsyncThunk(
    "mainCards/updateMainCards",
    async ({oldId, newObj}: { oldId: string; newObj: any }) => {
        await updateDoc(doc(db, "mainCards", oldId), newObj)
        return { oldId, ...newObj }
    }
)