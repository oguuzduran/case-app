import { createSlice } from '@reduxjs/toolkit';

export const formAction = createSlice({
	name: 'formAction',
	initialState: {
		contracts: [
			{
				contract: { id: '1', contract: '2018', offer: '2342', data: 'Satış' },
			},
			{
				contract: { id: '2', contract: '2019', offer: '1232', data: 'Alış' },
			},
			{
				contract: { id: '3', contract: '2019', offer: '5433', data: 'Satış' },
			},
			{
				contract: { id: '4', contract: '2018', offer: '3223', data: 'Alış' },
			},
		],
	},
	reducers: {
		setFormAction: (state, action) => {
			state.contracts.push(action.payload);
		},
	},
});

export const { setFormAction } = formAction.actions;
export default formAction.reducer;
