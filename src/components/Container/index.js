import React from 'react';
import Split from 'react-split';

import List from '../List';

import './Container.css';

function Container() {
	return (
		<>
			<Split
				className="main-split"
				direction="vertical"
				onDragEnd={(e) => localStorage.setItem('center', JSON.stringify(e))}
				sizes={JSON.parse(localStorage.getItem('center')) || [60, 40]}
			>
				<Split
					direction="horizontal"
					className="split"
					onDragEnd={(e) => localStorage.setItem('top', JSON.stringify(e))}
					sizes={JSON.parse(localStorage.getItem('top')) || [70, 30]}
				>
					<div>
						<List />
					</div>
					<div>Konumlar</div>
				</Split>
				<Split
					direction="horizontal"
					className="split"
					onDragEnd={(e) => localStorage.setItem('bottom', JSON.stringify(e))}
					sizes={JSON.parse(localStorage.getItem('bottom')) || [70, 30]}
				>
					<div>Container</div>
					<div>Container</div>
				</Split>
			</Split>
		</>
	);
}

export default Container;
