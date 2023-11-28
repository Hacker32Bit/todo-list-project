import { updateDoc, doc } from "@firebase/firestore"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../firebase"

export const editBoard = createAsyncThunk(
    "blog/editBoardBoard",
    async (props: any) => {
        await updateDoc(doc(db, "boards", props.oldId), props.newObj)
    }
)