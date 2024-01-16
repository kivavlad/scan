import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../utils/config";

type IAccountInfo = {
    eventFiltersInfo: {
        usedCompanyCount: number;
        companyLimit: number;
    },
    loading: boolean;
    isLogged: boolean;
    errorCode: any;
}

const initialState: IAccountInfo = {
    eventFiltersInfo: {
        usedCompanyCount: 0,
        companyLimit: 0,
    },
    loading: false,
    isLogged: false,
    errorCode: null,
}

export const fetchAccountInfo = createAsyncThunk<IAccountInfo, string>(
    'accountInfo/fetchAccountInfo',
    async function (token) {
        const response = await fetch(`${API_BASE_URL}/api/v1/account/info`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json-patch+json',
                Authorization: `Bearer ${token}`
            }
        })

        if (!response.ok) throw new Error('Error');

        const data = await response.json();
        return data;
    }
)

const accountInfoSlice = createSlice({
    name: 'accountInfo',
    initialState,
    reducers: {
        setIsLogged(state) {
            state.isLogged = false;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAccountInfo.pending, (state) => {
                state.loading = true;
                state.isLogged = true;
            })
            .addCase(fetchAccountInfo.rejected, (state, action) => {
                state.errorCode = action.error;
                state.isLogged = false;
                state.loading = false;
            })
            .addCase(fetchAccountInfo.fulfilled, (state, action) => {
                const { eventFiltersInfo } = action.payload;

                if (eventFiltersInfo) {
                    state.eventFiltersInfo = eventFiltersInfo;
                    state.loading = false;
                    state.isLogged = true;
                } else {
                    state.isLogged = false;
                }
            })
    },
})

export const { setIsLogged } = accountInfoSlice.actions;
export default accountInfoSlice.reducer;