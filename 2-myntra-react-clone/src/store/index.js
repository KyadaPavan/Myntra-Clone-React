import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./itemSlice"
import fetchingStatusSlice from "./fetchingStatusSlice"
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchingStatusSlice.reducer,
        bag: bagSlice.reducer,
    }
})



export default myntraStore;