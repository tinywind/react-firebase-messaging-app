import FeatherIcon from 'feather-icons-react';
import React from 'react';
import './RoomHeader.scss';

function RoomHeader(props) {
	const IsFavorite = props.isFavorite;
	const handleClick = () => {
		alert('Some Basic Information');
	};

	return (
		<>
			<nav className='navbar is-primary px-5' style={{ zIndex: 1 }}>
				<div id='innerMenu' className='navbar-menu'>
					<div className='navbar-start'>
						<div className='navbar-item'>
							<FeatherIcon icon='star' fill={IsFavorite ? 'white' : ''} size='18' className='mr-3' />
							{props.RoomName !== undefined ? props.RoomName : 'Select Room'}
						</div>
					</div>
					<div className='navbar-end'>
						<div className='navbar-item' onClick={handleClick}>
							Info
							<FeatherIcon icon='info' size='18' className='ml-3' />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default RoomHeader;
