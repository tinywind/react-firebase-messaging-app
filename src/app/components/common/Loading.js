/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Loading(props) {
	return (
		<div className={`pageloader ${props.IsLoading === true ? 'is-active' : ''}`}>
			<span className='title'>Loading...</span>
		</div>
	);
}

export default Loading;
