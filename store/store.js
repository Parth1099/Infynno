import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import homeSlice from "./homePageslice";

const makeStore = ()=> configureStore({
    reducer: {
        homeSlice : homeSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true
})

export const wrapper = createWrapper(makeStore)