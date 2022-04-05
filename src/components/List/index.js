import React, { useState, useEffect } from 'react';
import 'src/components/List/List.scss';

import data from 'src/data';
import settings from 'src/images/svg/settings.svg';

function List() {
	const [listData, setListData] = useState([]);
	const [list, setList] = useState([]);
	const [settingsVisibility, setSettingsVisibility] = useState(false);

	const [selectValue, setSelectValue] = useState('');
	const [areaControl, setAreaControl] = useState({
		id: true,
		contract: true,
		offer: true,
		data: true,
	});

	useEffect(() => {
		if (data.length > 0) {
			setListData(data);
		}
	}, []);

	useEffect(() => {
		if (selectValue !== '') {
			const result = listData.filter((listData) => listData.contract === selectValue);
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
					{settingsVisibility ? (
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
									id="contract"
									name="contract"
									checked={areaControl.contract}
									onChange={() =>
										setAreaControl({ ...areaControl, contract: !areaControl.contract })
									}
								/>
								<label htmlFor="contract">Kontrat</label>
							</div>

							<div>
								<input
									type="checkbox"
									id="offer"
									name="offer"
									value="offer"
									checked={areaControl.offer}
									onChange={() => setAreaControl({ ...areaControl, offer: !areaControl.offer })}
								/>
								<label htmlFor="offer">Teklif</label>
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
					) : (
						console.log('Hata')
					)}
				</div>
			</div>
			<table>
				<thead>
					<tr>
						{areaControl.id && <th>Id</th>}
						{areaControl.contract && <th>Kontrat</th>}
						{areaControl.offer && <th>Teklif</th>}
						{areaControl.data && <th>Data</th>}
					</tr>
				</thead>
				<tbody>
					{list.length > 0 ? (
						list.map(({ id, contract, offer, data }) => (
							<tr key={id}>
								{areaControl.id && <td>{id}</td>}
								{areaControl.contract && <td>{contract}</td>}
								{areaControl.offer && <td>{offer}</td>}
								{areaControl.data && <td>{data}</td>}
							</tr>
						))
					) : (
						<div>Hata</div>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default List;
