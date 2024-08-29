import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: null

}

export const cardslice=createSlice({
    name:"Article Card",
    initialState,
    reducers:{
        setsearchCard:(state,action)=>{
            state.data=action.payload
        }
    }
})