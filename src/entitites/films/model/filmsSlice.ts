import { createSlice } from '@reduxjs/toolkit'

interface initialState {
    categor: string | undefined
    theme: string | undefined
    loading: boolean
}

const initialState: initialState = {
    categor: undefined,
    theme: undefined,
    loading: false,
}

const categorySlice = createSlice({
    name: 'categor',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.categor = action.payload
            state.loading = false
        },
        clearCategory: (state) => {
            state.categor = undefined
        },
        setTheme: (state, action) => {
            state.theme = action.payload
            state.loading = false
        },
        clearTheme: (state) => {
            state.theme = undefined
        },
    },
})

export const { setCategory, clearCategory, setTheme, clearTheme } =
    categorySlice.actions

export const categoryReducer = categorySlice.reducer
