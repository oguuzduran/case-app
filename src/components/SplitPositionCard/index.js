import React from 'react';

import './SplitPositionCard.css';
const SplitPositionCard = ({ splitTop, splitBottom, splitCenter }) => {
	return (
		<div className="split-position-card">
			<span>Üst Split Pozisyonu</span>
			<p>
				%{splitCenter[0]} %{splitCenter[1]}
			</p>

			<span>Orta Split Pozisyonu</span>
			<p>
				%{splitBottom[0]} %{splitBottom[1]}
			</p>

			<span>Alt Split Pozisyonu</span>
			<p>
				%{splitTop[0]} %{splitTop[1]}
			</p>
		</div>
	);
};

export default SplitPositionCard;
