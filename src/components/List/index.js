import React, { useState, useEffect } from 'react';
import './List.scss';

import data from '../../data';
import settings from '../../images/svg/settings.svg';

function List() {
	const [listData, setListData] = useState([]);
	const [list, setList] = useState([]);
	const [settingsVisibility, setSettingsVisibility] = useState(false);

	const [selectValue, setSelectValue] = useState('');
	const [areaControl, setAreaControl] = useState({
		id: true,
		kontrat: true,
		teklif: true,
		data: true,
	});

	useEffect(() => {
		if (data.length > 0) {
			setListData(data);
		}
	}, []);

	useEffect(() => {
		if (selectValue !== '') {
			const result = listData.filter((listData) => listData.kontrat === selectValue);
			setList(result);
		} else {
			setList(listData);
		}
	}, [selectValue, listData]);

	return (
		<div>
			<div className="ListHeader">
				<div>
					<select name="contract" id="contract" onChange={(e) => setSelectValue(e.target.value)}>
						<option value="">Kontrat Seçiniz</option>
						<option value="2019">2019</option>
						<option value="2018">2018</option>
					</select>
				</div>
				<div>
					<img
						src={settings}
						alt=""
						className="settings-img"
						onClick={() => setSettingsVisibility(!settingsVisibility)}
					/>
					{settingsVisibility && (
						<div className="settings">
							<div>
								<input
									type="checkbox"
									id="id"
									name="id"
									value="id"
									checked={areaControl.id}
									onChange={() => setAreaControl({ ...areaControl, id: !areaControl.id })}
								/>
								<label htmlFor="id">ID</label>
							</div>

							<div>
								<input
									type="checkbox"
									id="kontrat"
									name="kontrat"
									checked={areaControl.kontrat}
									onChange={() => setAreaControl({ ...areaControl, kontrat: !areaControl.kontrat })}
								/>
								<label htmlFor="kontrat">Kontrat</label>
							</div>

							<div>
								<input
									type="checkbox"
									id="teklif"
									name="teklif"
									value="teklif"
									checked={areaControl.teklif}
									onChange={() => setAreaControl({ ...areaControl, teklif: !areaControl.teklif })}
								/>
								<label htmlFor="teklif">Teklif</label>
							</div>

							<div>
								<input
									type="checkbox"
									id="data"
									name="data"
									value="data"
									checked={areaControl.data}
									onChange={() => setAreaControl({ ...areaControl, data: !areaControl.data })}
								/>
								<label htmlFor="data">Data</label>
							</div>
						</div>
					)}
				</div>
			</div>
			<table>
				<thead>
					<tr>
						{areaControl.id && <th>Id</th>}
						{areaControl.kontrat && <th>Kontrat</th>}
						{areaControl.teklif && <th>Teklif</th>}
						{areaControl.data && <th>Data</th>}
					</tr>
				</thead>
				<tbody>
					{list.length > 0 &&
						list.map(({ id, kontrat, teklif, data }) => (
							<tr key={id}>
								{areaControl.id && <td>{id}</td>}
								{areaControl.kontrat && <td>{kontrat}</td>}
								{areaControl.teklif && <td>{teklif}</td>}
								{areaControl.data && <td>{data}</td>}
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default List;
