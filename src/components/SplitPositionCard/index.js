import React from 'react';
import PropTypes from 'prop-types';

import './SplitPositionCard.scss';

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

SplitPositionCard.propTypes = {
	splitTop: PropTypes.array,
	splitBottom: PropTypes.array,
	splitCenter: PropTypes.array,
};

SplitPositionCard.defaultProps = {
	splitTop: [60, 40],
	splitBottom: [60, 40],
	splitCenter: [60, 40],
};

export default SplitPositionCard;
