import { configureStore } from '@reduxjs/toolkit';
import formReducer from './action/formAction';

export default configureStore({
	reducer: {
		formAction: formReducer,
	},
});
