import { configureStore } from "@reduxjs/toolkit";
import { fetchData } from "./slice";
import slice from "./slice";

const store= configureStore({
    reducer:{
        fetchSlice:slice
    }

})

export default store;