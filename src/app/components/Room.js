import React, {useContext} from 'react';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore';
import {firestore} from '../../features/firebase';
import {RoomContext} from "../pages/Main";
import Header from './room/Header';
import Body from "./room/Body";
import Footer from "./room/Footer";

export default function Room() {
    const {roomId} = useContext(RoomContext);
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

    return !!room && (
        <>
            <Header roomId={roomId} roomName={room?.data().name} isFavorite={false}/>
            <Body roomId={roomId} chatMessages={chatMessages} loading={loading} hasError={error}/>
            <Footer roomId={roomId} loading={loading}/>
        </>
    );
}
