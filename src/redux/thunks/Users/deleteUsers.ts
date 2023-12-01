import { deleteDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const deleteUsers = createAsyncThunk(
    "users/deleteUsers",
    async (userId: string) => {
        await deleteDoc(doc(db, "users", userId))
        return userId;
    }
)