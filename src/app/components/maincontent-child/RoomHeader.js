/* eslint-disable jsx-a11y/anchor-is-valid */
import FeatherIcon from 'feather-icons-react';
import React, {useContext, useState} from 'react';
import './RoomHeader.scss';
import {AlertDialogContext} from "../common/AlertDialogProvider";

function RoomHeader(props) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const alertContext = useContext(AlertDialogContext);
    const showAlert = () => alertContext.show(
        <div className='is-size-6 my-2'>
            The room '<strong className='has-text-dark'>{props.RoomName}</strong>' is created by Admin. You have open access to read and write message. Please refrain from using abusing language and
            mature content.
        </div>
    );

    return (
        <nav className='navbar is-primary px-5' style={{zIndex: 1}}>
            <div id='innerMenu' className='navbar-menu'>
                <div className='navbar-start'>
                    <div className='navbar-item'>
                        <FeatherIcon icon='star' fill={isFavorite ? 'white' : ''} size='18' className='mr-3' onClick={toggleFavorite}/>
                        {props.RoomName !== undefined ? props.RoomName : 'Select Room'}
                    </div>
                </div>
                <div className='navbar-end'>
                    <a className='navbar-item' onClick={showAlert}>
                        Info
                        <FeatherIcon icon='info' size='18' className='ml-3'/>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default RoomHeader;
