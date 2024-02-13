import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload)
        },
        removeFromWishlist: (state, action) => {
            state.pop(action.payload)
        }
    }
})

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;