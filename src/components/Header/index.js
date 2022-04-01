import React from 'react';
import './Header.css';

function Header() {
	return (
		<div className="Header">
			<div>Epiaş</div>
			<div className="ClientInfo">
				<div className='WorkingArea'>Çalışma Alanı</div>
				<div className='ClientSettings'>Merhab, Oğuz</div>
			</div>
		</div>
	);
}

export default Header;
