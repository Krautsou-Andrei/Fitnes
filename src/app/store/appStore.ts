import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
