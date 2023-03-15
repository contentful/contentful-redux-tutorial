// ./src/state/product.action.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContentfulClient } from "../ContentfulApiClient";

const Contentful = new ContentfulClient("woodcraftAuction");

export const fetchArtworks = createAsyncThunk(
    "product/fetchArtworks",
    async (searchText) => {
        try {
            const data = await Contentful.getItems(searchText);

            return data;
        } catch (e) {
            console.log(`Error fetching data: ${e}`);
        }
    }
);
