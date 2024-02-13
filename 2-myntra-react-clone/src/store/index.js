import { configureStore } from "@reduxjs/toolkit"
import itemSlice from "./itemSlice"
import fetchingStatusSlice from "./fetchingStatusSlice"
import bagSlice from "./bagSlice";
import wishlist from "./wishlistSlice";

const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchingStatusSlice.reducer,
        bag: bagSlice.reducer,
        wishlist: wishlist.reducer,
    }
})



export default myntraStore;