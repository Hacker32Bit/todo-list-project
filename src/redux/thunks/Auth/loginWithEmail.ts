import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { UserProps } from "redux/store.interfaces";


export const loginWithEmail = createAsyncThunk(
    "user/loginWithEmail",
    async (data: {email: string, password: string}, { rejectWithValue }) => {
        const { email, password } = data
        console.log(data)
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            const userData: UserProps = {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName,
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