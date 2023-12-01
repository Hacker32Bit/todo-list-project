import { updateDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const updateUsers = createAsyncThunk(
    "users/updateUsers",
    async ({oldId, newObj}: { oldId: string; newObj: any }) => {
        await updateDoc(doc(db, "users", oldId), newObj)
        return { oldId, ...newObj }
    }
)