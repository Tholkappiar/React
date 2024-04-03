import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";

const appStore = configureStore({
	reducer: {
		cart: cardSlice,
	},
});

export default appStore;
