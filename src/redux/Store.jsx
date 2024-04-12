import cartSLice from "./Cartslice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore(
    {
        reducer:{
            cart: cartSLice

        },
        devTools:true
    }
)