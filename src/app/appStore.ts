import { configureStore } from '@reduxjs/toolkit'
import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from 'react-redux'
import { rootReducer } from './appReducer'

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
