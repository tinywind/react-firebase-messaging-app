import React from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../../features/appSlice';
import { firestore } from '../../firebase';
import RoomFooter from './maincontent-child/RoomFooter';
import RoomHeader from './maincontent-child/RoomHeader';
import RoomMain from './maincontent-child/RoomMain';
import './MainContent.scss';

function MainContent() {
	const RoomId = useSelector(selectRoomId);
	const [RoomDetails] = useDocument(RoomId && firestore.collection('rooms').doc(RoomId));
	const RoomName = RoomDetails?.data()?.name;
	const [ChatMessages, loading, error] = useCollection(RoomId && firestore.collection('rooms').doc(RoomId).collection('messages').orderBy('timeStamp', 'asc'));

	const IsFavorite = false;
	return (
		<>
			<RoomHeader RoomId={RoomId} RoomName={RoomName} IsFavorite={IsFavorite}></RoomHeader>
			<RoomMain RoomId={RoomId} ChatMessages={ChatMessages} IsLoading={loading} HasError={error}></RoomMain>
			<RoomFooter RoomId={RoomId} IsLoading={loading}></RoomFooter>
		</>
	);
}

export default MainContent;
