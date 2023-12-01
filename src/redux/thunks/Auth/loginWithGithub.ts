import { createAsyncThunk } from "@reduxjs/toolkit";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";
import { UserProps } from "redux/store.interfaces";


export const loginWithGithub = createAsyncThunk(
    "user/loginWithGithub",
    async (_, { rejectWithValue }) => {
        try {
            const provider = new GithubAuthProvider();
            const result = await signInWithPopup(auth, provider);
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