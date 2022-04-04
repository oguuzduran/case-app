import { createSlice } from '@reduxjs/toolkit';

export const formAction = createSlice({
	name: 'formAction',
	initialState: {
		contracts: [
			{
				contract: { id: '1', kontrat: '2018', teklif: '2342', data: 'Satış' },
			},
			{
				contract: { id: '2', kontrat: '2019', teklif: '1232', data: 'Alış' },
			},
			{
				contract: { id: '3', kontrat: '2019', teklif: '5433', data: 'Satış' },
			},
			{
				contract: { id: '4', kontrat: '2018', teklif: '3223', data: 'Alış' },
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
