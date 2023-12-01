import { deleteDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const deleteComments = createAsyncThunk(
    "comments/deleteComments",
    async (commentId: string) => {
        await deleteDoc(doc(db, "comments", commentId))
        return commentId;
    }
)