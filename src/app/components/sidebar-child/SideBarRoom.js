/* eslint-disable jsx-a11y/anchor-is-valid */
// import Loading from '../../components/common/Loading';
import FeatherIcon from 'feather-icons-react';
import React from 'react';

function SideBarRoom() {
	const roomDetails = ['General Room', 'Special Room', 'VIP Room', 'Extra Room', 'Private Room'];

	const addRoomHandler = () => {
		const roomName = prompt('Enter the room name!');
		if (roomName) {
			roomDetails.push(roomName);
			alert(roomName + ' added successfully!');
		}
	};

	const selectRoomHandler = (roomName) => {
		alert(roomName + ' selected successfully!');
	};

	const renderRooms = (rooms) => {
		let roomMarkup = '';
		roomMarkup = rooms.map((r) => (
			<li>
				<a className='column is-narrow' onClick={() => selectRoomHandler(r)}>
					{r}
				</a>
			</li>
		));

		return <ul>{roomMarkup}</ul>;
	};

	return (
		<>
			<div className='prima-links columns' onClick={addRoomHandler}>
				<a className='column is-10'>Add Rooms</a>
				<div className='column is-narrow'>
					<FeatherIcon icon='plus-circle' size='24' />
				</div>
			</div>
			<div className='is-scroll'>
				<ul className='menu-list'>
					<li>{renderRooms(roomDetails)}</li>
				</ul>
			</div>
		</>
	);
}

export default SideBarRoom;
