import { configureStore } from "@reduxjs/toolkit";
import {CounterSliceReducer} from './counter';
import {authSliceReducer} from './authentication';

const store = configureStore({
    reducer: { counter: CounterSliceReducer, auth: authSliceReducer}
});

export default store;