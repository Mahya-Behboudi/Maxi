import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = { isAuthenticates: false };

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticates = true;
        },
        logout(state) {
            state.isAuthenticates = false;
        }

    }
});
export const authSliceReducer =  authSlice.reducer;
export const authAction = authSlice.actions;
