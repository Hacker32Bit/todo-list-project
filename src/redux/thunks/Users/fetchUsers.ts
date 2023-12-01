import { collection, getDocs } from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../firebase";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        //console.log(querySnapshot.docs)
        return querySnapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
    }
)