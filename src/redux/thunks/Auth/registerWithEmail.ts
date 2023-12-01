import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { User } from "redux/store.interfaces";

export const registerWithEmail = createAsyncThunk(
    "user/registerWithEmail",
    async (data: {email: string, password: string}, { rejectWithValue }) => {
        const { email, password } = data

        //console.log(data)
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            const userData: User = {
                uid: result.user.uid,
                email: result.user.email,
                displayName: "Guest user",
                photoURL: result.user.photoURL,
            }

            return userData
        } catch (error){
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            else {
                rejectWithValue("My Error message")
            }
        }
        
    }
)