import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    home: null,
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setHome: (state, action) => {
            state.home = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setHome } = homeSlice.actions

export const selectHome = (state) => state.home

export default homeSlice.reducer