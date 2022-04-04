import React from 'react';
import './Form.scss';
const Form = () => {
	return (
		<>
			<div className="form">
				<form>
					<input type="text" defaultValue="no giriniz." name="id" />
					<input type="text" defaultValue="kontrat giriniz." name="kontrat" />
					<input type="text" defaultValue="teklif giriniz." name="teklif" />
					<input type="text" defaultValue="data giriniz." name="data" />
					<button>Kaydet</button>
				</form>
				<button>Yeni Ekle</button>
			</div>
		</>
	);
};

export default Form;
