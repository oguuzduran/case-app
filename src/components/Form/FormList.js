import React from 'react';
import { useSelector } from 'react-redux';

const FormList = () => {
	const contracts = useSelector((state) => state.formAction.contracts);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Kontrat</th>
						<th>Teklif</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					{contracts.length > 0 ? (
						contracts.map(({ contract }, index) => (
							<tr key={index}>
								<td>{contract.id}</td>
								<td>{contract.contract}</td>
								<td>{contract.offer}</td>
								<td>{contract.data}</td>
							</tr>
						))
					) : (
						<div style={{ margin: '10px' }}>Veri yok...</div>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default FormList;
