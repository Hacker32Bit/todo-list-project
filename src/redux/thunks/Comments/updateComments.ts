import { updateDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const updateComments = createAsyncThunk(
    "comments/updateComments",
    async ({oldId, newObj}: { oldId: string; newObj: any }) => {
        await updateDoc(doc(db, "comments", oldId), newObj)
        return { oldId, ...newObj }
    }
)