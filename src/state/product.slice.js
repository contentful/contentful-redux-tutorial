import { createSlice } from "@reduxjs/toolkit";
import { fetchArtworks } from "./product.action";

const productSlice = createSlice({
    name: "PRODUCT_SLICE",
    initialState: {
        artworks: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArtworks.fulfilled, (state, { payload }) => {
            state.artworks = payload;
        });
    },
});

export default productSlice;
