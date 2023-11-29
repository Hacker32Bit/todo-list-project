import { collection, getDocs } from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../firebase";

export const fetchMainCards = createAsyncThunk(
    "mainCards/fetchMainCards",
    async () => {
        const querySnapshot = await getDocs(collection(db, "mainCards"));
        //console.log(querySnapshot.docs)
        return querySnapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
    }
)