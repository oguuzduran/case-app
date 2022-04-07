import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ type, id, name, value, placeholder, checked, onChange }) => {
	return (
		<input
			type={type}
			id={id}
			name={name}
			value={value}
			placeholder={placeholder}
			checked={checked}
			onChange={onChange}
		/>
	);
};

InputText.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

InputText.defaultProps = {
	type: 'text',
};

export default InputText;
