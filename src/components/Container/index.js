import React, { useState } from 'react';
import Split from 'react-split';

import List from 'src/components/List';
import SplitPositionCard from 'src/components/SplitPositionCard';
import Form from 'src/components/Form';

import './Container.scss';

function Container() {
	const [splitTop, setSplitTop] = useState(JSON.parse(localStorage.getItem('top')) || [60, 40]);
	const [splitCenter, setSplitCenter] = useState(
		JSON.parse(localStorage.getItem('center')) || [60, 40],
	);
	const [splitBottom, setSplitBottom] = useState(
		JSON.parse(localStorage.getItem('bottom')) || [60, 40],
	);

	return (
		<>
			<Split
				className="main-split"
				direction="vertical"
				onDragEnd={(e) => {
					localStorage.setItem('center', JSON.stringify(e));
				}}
				onDrag={(e) => setSplitCenter(e)}
				sizes={JSON.parse(localStorage.getItem('center')) || splitCenter}
			>
				<Split
					direction="horizontal"
					className="split"
					onDragEnd={(e) => localStorage.setItem('top', JSON.stringify(e))}
					onDrag={(e) => setSplitTop(e)}
					sizes={JSON.parse(localStorage.getItem('top')) || splitTop}
				>
					<div>
						<List />
					</div>
					<div>
						<SplitPositionCard
							splitTop={splitTop}
							splitBottom={splitBottom}
							splitCenter={splitCenter}
						/>
					</div>
				</Split>
				<Split
					direction="horizontal"
					className="split"
					onDragEnd={(e) => localStorage.setItem('bottom', JSON.stringify(e))}
					onDrag={(e) => setSplitBottom(e)}
					sizes={JSON.parse(localStorage.getItem('bottom')) || splitBottom}
				>
					<div>
						<Form />
					</div>
					<div>Lorem Ipsum</div>
				</Split>
			</Split>
		</>
	);
}

export default Container;
