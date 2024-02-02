import { createSlice } from "@reduxjs/toolkit";

const fetchingStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers: {
        markFetchingDone: (state) => {
            state.fetchDone = true;
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true;
        },
        markFetchingCompleted: (state) => {
            state.currentlyFetching = false;
        }
    }
})

export const fetchStatusActions = fetchingStatusSlice.actions;

export default fetchingStatusSlice;