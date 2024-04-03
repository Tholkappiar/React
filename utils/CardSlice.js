import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
	name: "CardSlice",
	initialState: {
		items: ["pizza", "briyani"],
	},
	reducers: {
		addItems: (state, action) => {
			state.push(action.payload);
		},
		removeItem: (state) => {
			state.pop();
		},
		clearItems: (state) => {
			state.items = [];
		},
	},
});

export const { addItems, removeItem, clearItems } = cardSlice.actions;

export default cardSlice.reducer;
