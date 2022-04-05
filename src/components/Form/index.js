import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormAction } from '../../action/formAction';

import FormList from './FormList';

import './Form.scss';

const Form = () => {
	const dispatch = useDispatch();

	const [formValues, setFormValues] = useState({ id: '', contract: '', offer: '', data: '' });

	// const formData = useSelector((state) => state.formAction.data);
	// console.log(data);

	const handleButton = (e) => {
		e.preventDefault();
		dispatch(setFormAction({ contract: formValues }));
	};

	return (
		<>
			<FormList />
			<div className="form">
				<form>
					<input
						type="text"
						placeholder="no giriniz."
						name="id"
						onChange={(e) => setFormValues({ ...formValues, id: e.target.value })}
					/>
					<input
						type="text"
						placeholder="kontrat giriniz."
						name="contract"
						onChange={(e) => setFormValues({ ...formValues, contract: e.target.value })}
					/>
					<input
						type="text"
						placeholder="teklif giriniz."
						name="offer"
						onChange={(e) => setFormValues({ ...formValues, offer: e.target.value })}
					/>
					<input
						type="text"
						placeholder="data giriniz."
						name="data"
						onChange={(e) => setFormValues({ ...formValues, data: e.target.value })}
					/>
					<button onClick={(e) => handleButton(e)}>Kaydet</button>
				</form>
				<button>Yeni Ekle</button>
			</div>
		</>
	);
};

export default Form;
