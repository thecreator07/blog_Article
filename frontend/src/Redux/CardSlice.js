import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: null

}

export const cardslice = createSlice({
    name: "Article Card",
    initialState,
    reducers: {
        setSearchData(state, action) {
            const {cards}=action.payload
            state.data = cards
        }
    }
})

export const { setSearchData } = cardslice.actions

export default cardslice.reducer