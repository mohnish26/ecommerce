import cartSLice from "./Cartslice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore(
    
    {
        reducer:{
            cart: cartSLice

        },
        devTools:true
    }
)