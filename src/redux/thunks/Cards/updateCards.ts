import { updateDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const updateCards = createAsyncThunk(
    "cards/updateCards",
    async ({oldId, newObj}: { oldId: string; newObj: any }) => {
        await updateDoc(doc(db, "cards", oldId), newObj)
        return { oldId, ...newObj }
    }
)