import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IAccessToken } from "../../types/data";

type IState = {
    accessToken: string;
    exspire: string;
    isLogged: boolean;
}

const initialState: IState = {
    accessToken: '',
    exspire: '',
    isLogged: false,
}

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<IAccessToken>) {
            const { accessToken, expire } = action.payload;

            if (accessToken) {
                state.accessToken = accessToken;
                state.exspire = expire;
                state.isLogged = true;
                localStorage.setItem('token', accessToken);
            }
        },
        checkAccessToken(state) {
            const expireStr = state.exspire;
            const expireDate = new Date(expireStr);
            const nowDate = new Date();

            if (expireDate > nowDate) {
                state.isLogged = true;
            } else {
                state.isLogged = false;
            }
        },
        logOut() {
            localStorage.clear();
            return initialState;
        }
    }
})

export const { setAccessToken, checkAccessToken, logOut } = authorizationSlice.actions;
export default authorizationSlice.reducer;