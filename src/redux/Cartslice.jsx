import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSLice  = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart(state, action){
            state.push(action.payload)
        },
        removetocart(state, action){
            return state.filter(item => item.id !== action.payload.id)
        }
    }

})

export const { addtocart, removetocart} = cartSLice.actions
export default cartSLice