/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';
import './SideBarOption.scss';
import {AlertDialogContext} from "../common/AlertDialogProvider";

function SideBarOption() {
    const alertContext = useContext(AlertDialogContext);
    const showAlert = () => alertContext.show(<div className='is-size-6 my-2'>This feature will be available soon...</div>);

    return (
        <ul className='menu-list'>
            <li>
                <a className='links' onClick={showAlert}>
                    Saved Conversations
                </a>
            </li>
            <li>
                <a className='links' onClick={showAlert}>
                    Your Groups
                </a>
            </li>
        </ul>
    );
}

export default SideBarOption;
