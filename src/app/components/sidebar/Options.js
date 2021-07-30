import React, {useContext} from 'react';
import {AlertDialogContext} from "../common/AlertDialogProvider";

export default function Options() {
    const alertContext = useContext(AlertDialogContext);
    const showAlert = () => alertContext.show(<div className='is-size-6 my-2'>This feature will be available soon...</div>);

    return (
        <ul className='menu-list'>
            <li>
                <button className='links' onClick={showAlert}>Saved Conversations</button>
            </li>
            <li>
                <button className='links' onClick={showAlert}>Your Groups</button>
            </li>
        </ul>
    );
}
