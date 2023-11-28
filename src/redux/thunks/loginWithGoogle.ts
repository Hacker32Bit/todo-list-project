import { User } from './../store.interfaces';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";


export const loginWithGoogle = createAsyncThunk(
    "user/loginWithGoogle",
    async (_, { rejectWithValue }) => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const userData: User = {
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