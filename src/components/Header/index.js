import React from 'react';
import './Header.scss';

import epias from '../../images/svg/epias.svg';
import layout from '../../images/svg/layout.svg';

function Header() {
	return (
		<div className="Header">
			<div>
				<img src={epias} width="70px" alt="" />
			</div>
			<div className="ClientInfo">
				<div className="WorkingArea">
					<img
						src={layout}
						alt=""
						width="30px"
						// style={{ backgroundColor: '#fff', marginRight: '10px' }}
						className="layout-svg"
					/>
					<span>Çalışma Alanı</span>
				</div>
				<div className="ClientSettings">
					<span data-letters="OĞ" />
					Merhaba, Oğuz
				</div>
			</div>
		</div>
	);
}

export default Header;
