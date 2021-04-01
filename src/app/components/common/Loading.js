import React from 'react';
import loading from './../../images/loading.png';

function Loading(props) {
	const h = props.height;
	const w = props.width;
	return (
		<div className='is-align-items-center is-vcentered'>
			<img alt='Loading...' src={loading} height={h} width={w} />
		</div>
	);
}

export default Loading;
