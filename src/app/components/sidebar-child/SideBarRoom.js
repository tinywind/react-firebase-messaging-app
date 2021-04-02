/* eslint-disable jsx-a11y/anchor-is-valid */
// import Loading from '../../components/common/Loading';
import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../../features/appSlice';
import { addToCollection, db } from '../../../firebase';
import './SideBarRoom.scss';

function SideBarRoom() {
	const [roomDetails, loading, error] = useCollection(db.collection('rooms'));
	const dispatch = useDispatch(enterRoom);

	const addRoomHandler = () => {
		const roomName = prompt('Enter the room name!');
		if (roomName) {
			addToCollection('rooms', { name: roomName }).then((result) => {
				alert(roomName + ' added successfully!');
			});
		}
	};

	const selectRoomHandler = (id) => {
		if (id) {
			dispatch(enterRoom({ RoomId: id }));
		}
	};

	const renderRooms = (rooms) => {
		let roomMarkup = '';
		roomMarkup = rooms?.docs?.map((doc) => (
			<li key={doc.id}>
				<div className='links columns'>
					<a className='column is-narrow mb-2'>
						<FeatherIcon icon='message-square' size='18' />
					</a>
					<a className='column is-narrow mb-1' onClick={() => selectRoomHandler(doc.id)}>
						{doc.data().name}
					</a>
				</div>
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
