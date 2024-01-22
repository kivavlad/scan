import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../utils/config';

type Iids = {
    ids: [];
}

type IState = {
    documents: any[];
    loading: boolean;
    error: boolean;
}

const initialState: IState = {
    documents: [],
    loading: false,
    error: false,
}

export const fetchDocuments = createAsyncThunk<IState, Iids>(
    'documents/fetchDocuments',
    async function (ids) {
        const response = await fetch(`${API_BASE_URL}/api/v1/documents`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json-patch+json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(ids)
        })

        if (!response.ok) throw new Error('Error');

        return await response.json();
    }
)

const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        resetDocuments() {
            return initialState;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchDocuments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDocuments.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(fetchDocuments.fulfilled, (state, action) => {
                console.log(action.payload)
            })
    },
})

export const { resetDocuments } = documentsSlice.actions;
export default documentsSlice.reducer;