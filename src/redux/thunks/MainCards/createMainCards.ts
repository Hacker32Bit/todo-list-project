import { addDoc, collection } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const createMainCards = createAsyncThunk(
    "mainCards/createMainCards",
    async (mainCardData: any) => {
        const docRef = await addDoc(collection(db, "mainCards"), mainCardData)
        return { id: docRef.id, ...mainCardData }
    }
)