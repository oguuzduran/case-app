import { configureStore } from '@reduxjs/toolkit';
import formReducer from 'src/action/formAction';

export default configureStore({
	reducer: {
		formAction: formReducer,
	},
});
