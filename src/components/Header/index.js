import React from 'react';
import './Header.scss';
import { ReactSVG } from 'react-svg';

import epias from 'src/images/svg/epias.svg';
import layout from 'src/images/svg/layout.svg';

function Header() {
	return (
		<div className="Header">
			<div>
				<ReactSVG src={epias} width="70px" />
			</div>
			<div className="ClientInfo">
				<div className="WorkingArea">
					<ReactSVG src={layout} className="layout-svg" />
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
