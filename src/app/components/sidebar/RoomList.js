import FeatherIcon from 'feather-icons-react';
import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import {addToCollection, deleteDocumentById, firestore} from '../../../features/firebase';
import {RoomContext} from "../../pages/Main";

export default function RoomList() {
    const [rooms] = useCollection(firestore.collection('rooms').orderBy('name'));
    const addRoom = () => {
        const roomName = prompt('Enter the room name!');
        addToCollection('rooms', {name: roomName})
            .catch(err => alert(err));
    };

    return (
        <RoomContext.Consumer>
            {({setRoomId}) =>
                <>
                    <button className='prima-links columns' onClick={() => addRoom()}>
                        <span className='column is-10'>Add Rooms</span>
                        <div className='column is-narrow'>
                            <FeatherIcon icon='plus-circle' size='24'/>
                        </div>
                    </button>
                    <div className='is-scroll'>
                        <ul className='menu-list'>
                            {rooms?.docs?.map((e) =>
                                <li key={e.id}>
                                    <div className='links columns'>
                                        <span className='column is-narrow mb-2'><FeatherIcon icon='message-square' size='18'/></span>
                                        <button className='column is-narrow mb-2'><FeatherIcon icon='x' size='18' onClick={() => deleteDocumentById('rooms', e.id)}/></button>
                                        <button className='column is-narrow mb-1' onClick={() => setRoomId(e.id)}>{e.data().name}</button>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </>
            }
        </RoomContext.Consumer>
    );
}
