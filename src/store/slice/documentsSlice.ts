import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../utils/config';

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

export const fetchDocuments = createAsyncThunk<IState, any>(
    'documents/fetchDocuments',
    async function (ids: string[]) {
        const response = await fetch(`${API_BASE_URL}/api/v1/documents`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json-patch+json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                ids: ids 
            })
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
                state.documents.push(action.payload);
                state.error = false;
                state.loading = false;
            })
    },
})

export const { resetDocuments } = documentsSlice.actions;
export default documentsSlice.reducer;