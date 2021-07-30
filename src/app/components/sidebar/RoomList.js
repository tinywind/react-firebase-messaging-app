import FeatherIcon from 'feather-icons-react';
import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import {useDispatch} from 'react-redux';
import {enterRoom} from '../../../features/appSlice';
import {addToCollection, deleteDocumentById, firestore} from '../../../features/firebase';

export default function SidebarRoom() {
    const [rooms] = useCollection(firestore.collection('rooms').orderBy('name'));
    const dispatch = useDispatch(enterRoom);

    const selectRoom = (id) => id && dispatch(enterRoom({roomId: id}));
    const addRoom = () => {
        const roomName = prompt('Enter the room name!');
        addToCollection('rooms', {name: roomName})
            .catch(err => alert(err));
    };

    return (
        <>
            <button className='prima-links columns' onClick={addRoom}>
                <span className='column is-10'>Add Rooms</span>
                <div className='column is-narrow'>
                    <FeatherIcon icon='plus-circle' size='24'/>
                </div>
            </button>
            <div className='is-scroll'>
                <ul className='menu-list'>
                    {rooms?.docs?.map((e) => (
                        <li key={e.id}>
                            <div className='links columns'>
                                <span className='column is-narrow mb-2'><FeatherIcon icon='message-square' size='18'/></span>
                                <button className='column is-narrow mb-2'><FeatherIcon icon='x' size='18' onClick={() => deleteDocumentById('rooms', e.id)}/></button>
                                <button className='column is-narrow mb-1' onClick={() => selectRoom(e.id)}>{e.data().name}</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
