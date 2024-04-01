import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../features/BoardSlice"
export const store = configureStore({
    reducer: {
        board: boardReducer
    }
})