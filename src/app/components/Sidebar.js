import React from 'react';
import SidebarOption from './sidebar-child/SideBarOption';
import SidebarRoom from './sidebar-child/SideBarRoom';
import './SideBar.scss';

function Sidebar() {
	return (
		<div className='is-max-height side-bar-custom pr-0 mr-0'>
			<div className='column is-sidebar-menu is-fixed-width'>
				<aside className='menu'>
					<div className='is-divider' data-content='Services'/>
					<SidebarOption/>
					<div className='is-divider' data-content='Rooms'/>
					<SidebarRoom/>
				</aside>
			</div>
		</div>
	);
}

export default Sidebar;
