import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice/authSlice"

const Store = configureStore({
    reducer: {
        authSlice
    }
})
export default Store