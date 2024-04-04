import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
	name: "CardSlice",
	initialState: {
		items: [],
	},
	reducers: {
		addItems: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
		},
		clearItems: (state) => {
			state.items = [];
		},
	},
});

export const { addItems, removeItem, clearItems } = cardSlice.actions;

export default cardSlice.reducer;
