/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './SideBarOption.scss';

function SideBarOption() {
	const handleOptions = () => {
		alert('To be implemented');
	};

	return (
		<ul className='menu-list'>
			<li>
				<a className='links' onClick={handleOptions}>
					Saved Conversations
				</a>
			</li>
			<li>
				<a className='links' onClick={handleOptions}>
					Your Groups
				</a>
			</li>
		</ul>
	);
}

export default SideBarOption;
