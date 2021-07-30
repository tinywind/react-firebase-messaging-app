import React from 'react';
import Options from './sidebar/Options';
import RoomList from './sidebar/RoomList';

export default function Sidebar() {
    return (
        <div className='is-max-height side-bar-custom pr-0 mr-0'>
            <div className='column is-sidebar-menu is-fixed-width'>
                <aside className='menu'>
                    <div className='is-divider' data-content='Services'/>
                    <Options/>
                    <div className='is-divider' data-content='Rooms'/>
                    <RoomList/>
                </aside>
            </div>
        </div>
    );
}
