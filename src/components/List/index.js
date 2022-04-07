import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';

import data from 'src/data';
import InputText from 'src/components/FormComponents/InputText';

import 'src/components/List/List.scss';
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
					<ReactSVG
						src={settings}
						className="settings-img"
						width={'100px'}
						onClick={() => setSettingsVisibility(!settingsVisibility)}
					/>
					{settingsVisibility ? (
						<div className="settings">
							<div>
								<InputText
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
								<InputText
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
								<InputText
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
								<InputText
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
					) : null}
				</div>
			</div>
			{list.length ? (
				<table>
					<thead>
						<tr>
							{areaControl.id ? <th>Id</th> : null}
							{areaControl.contract ? <th>Kontrat</th> : null}
							{areaControl.offer ? <th>Teklif</th> : null}
							{areaControl.data ? <th>Data</th> : null}
						</tr>
					</thead>
					<tbody>
						{list.map(({ id, contract, offer, data }) => (
							<tr key={id}>
								{areaControl.id ? <td>{id}</td> : null}
								{areaControl.contract ? <td>{contract}</td> : null}
								{areaControl.offer ? <td>{offer}</td> : null}
								{areaControl.data ? <td>{data}</td> : null}
							</tr>
						))}
					</tbody>
				</table>
			) : null}
		</div>
	);
}

export default List;
