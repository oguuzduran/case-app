import React from 'react';
import './Form.css';
const Form = () => {
	return (
		<>
			<div className='form'>
				<form>
					<input type="text" value="no giriniz." name="id" />
					<input type="text" value="kontrat giriniz." name="kontrat" />
					<input type="text" value="teklif giriniz." name="teklif" />
					<input type="text" value="data giriniz." name="data" />
					<button>Kaydet</button>
				</form>
				<button>Yeni Ekle</button>
			</div>
		</>
	);
};

export default Form;
