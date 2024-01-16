import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IAccessToken } from "../../types/data";

const initialState: IAccessToken = {
    accessToken: '',
    expire: null,
}

const makeAuthSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<IAccessToken>) {
            const { accessToken, expire } = action.payload;

            if (accessToken) {
                state.accessToken = accessToken;
                state.expire = expire;
                localStorage.setItem('token', accessToken);
            }
        },
        logOut() {
            localStorage.clear();
            return initialState
        }
    }
})

export const { setToken, logOut } = makeAuthSlice.actions;
export default makeAuthSlice.reducer;