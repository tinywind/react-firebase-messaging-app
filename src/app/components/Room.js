import React from 'react';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore';
import {useSelector} from 'react-redux';
import {selectRoomId} from '../../features/appSlice';
import {firestore} from '../../features/firebase';
import Footer from './room/Footer';
import Header from './room/Header';
import Body from './room/Body';

export default function Room() {
    const roomId = useSelector(selectRoomId);
    const [room] = useDocument(roomId &&
        firestore.collection('rooms')
            .doc(roomId)
    );
    const [chatMessages, loading, error] = useCollection(roomId &&
        firestore.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timeStamp', 'asc')
    );

    return (
        <>
            <Header roomId={roomId} roomName={room?.data().name} isFavorite={false}/>
            <Body roomId={roomId} chatMessages={chatMessages} loading={loading} hasError={error}/>
            <Footer roomId={roomId} loading={loading}/>
        </>
    );
}
