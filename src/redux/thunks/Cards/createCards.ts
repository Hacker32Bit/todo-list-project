import { addDoc, collection } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const createCards = createAsyncThunk(
    "cards/createCards",
    async (cardData: any) => {
        const docRef = await addDoc(collection(db, "cards"), cardData)
        return { id: docRef.id, ...cardData }
    }
)