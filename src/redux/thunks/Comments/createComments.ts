import { addDoc, collection } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const createComments = createAsyncThunk(
    "comments/createComments",
    async (commentData: any) => {
        const docRef = await addDoc(collection(db, "comments"), commentData)
        return { id: docRef.id, ...commentData }
    }
)