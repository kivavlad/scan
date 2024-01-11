import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../utils/config";
import { IUserData } from "../../types/data";
  
type IState = {
    accessToken: string;
    expire: string;
}

const initialState: IState = {
    accessToken: '',
    expire: '',
}

export const getAccessToken = createAsyncThunk<IState, IUserData, { rejectValue: string }>(
    'token/getAccessToken',
    async function (values, { rejectWithValue }) {
        const response = await fetch(`${API_BASE_URL}/api/v1/account/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json-patch+json',
            },
            body: JSON.stringify(values)
        })

        const data = await response.json();
        return data;
    }
);

const makeAuthSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAccessToken.pending, (state) => {})
            .addCase(getAccessToken.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.expire = action.payload.expire;
                localStorage.setItem('token', action.payload.accessToken);
                localStorage.setItem('expire', action.payload.expire);
                console.log(localStorage.getItem('token'));
                console.log(localStorage.getItem('expire'));
            })
    },
})

export default makeAuthSlice.reducer;