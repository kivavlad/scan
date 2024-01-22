import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { API_BASE_URL, URL_SEARCH_PARAMS } from "../../utils/config";
import type { ISearchParams } from "../../types/data";

type IState = {
    items: any[];
    loading: boolean;
    error: boolean;
}

const initialState: IState = {
    items: [],
    loading: false,
    error: false,
} 

export const fetchHistograms = createAsyncThunk<IState, ISearchParams>(
    'histograms/fetchHistograms',
    async function (data) {
        const response = await fetch(`${API_BASE_URL}/api/v1/objectsearch/histograms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json-patch+json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(URL_SEARCH_PARAMS(data))
        })

        if (!response.ok) throw new Error('Error');

        return await response.json();
    }
)

const histogramsSlice = createSlice({
    name: 'histograms',
    initialState,
    reducers: {
        resetHistorgams() {
            return initialState;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchHistograms.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchHistograms.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(fetchHistograms.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.loading = false;
                state.error = false;
            })
    },
})

export const { resetHistorgams } = histogramsSlice.actions;
export default histogramsSlice.reducer;