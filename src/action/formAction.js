import { createSlice } from '@reduxjs/toolkit';

export const formAction = createSlice({
	name: 'formAction',
	initialState: {
		contracts: [],
	},
	reducers: {
		setFormAction: (state, action) => {
			state.contracts.push(action.payload);
		},
	},
});

export const { setFormAction } = formAction.actions;
export default formAction.reducer;
