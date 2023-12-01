import { Timestamp, doc, setDoc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../../firebase"

export const createUsers = createAsyncThunk(
    "users/createUsers",
    async (userData: any) => {
        await setDoc(doc(db, "users", userData.uid), {
            displayName: userData.displayName,
            email: userData.email,
            photoURL: userData.photoURL,
            status: "student",
            created: Timestamp.fromDate(new Date()),
        })
        return {...userData}
    }
)