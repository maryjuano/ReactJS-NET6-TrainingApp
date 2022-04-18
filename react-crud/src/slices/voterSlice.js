import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    voters: [],
    isFetchingData: false
}

export const setVoters = createAsyncThunk(
    'voter/setVoterList',
    async () => {
        const response = await axios({
            method: 'GET',
            url: 'https://localhost:7015/api/Voters',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        })

    }
)


export const voterSlice = createSlice(
    {
        name: 'voter',
        initialState: initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder
            .addCase(setVoters.pending, (state) => {
                state.isFetchingData = true;
            })
            .addCase(setVoters.fulfilled, (state, action) => {
                state.voters = action.payload;
                state.isFetchingData = false;
            })
        }
    }
)

export default voterSlice.reducer;