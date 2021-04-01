import React from 'react';
import SideBarOption from './sidebar-child/SideBarOption';
import SideBarRoom from './sidebar-child/SideBarRoom';
import './SideBar.scss';

function SideBar() {
	return (
		<div className='is-max-height side-bar-custom pr-0 mr-0'>
			<div className='column is-sidebar-menu is-fixed-width'>
				<aside className='menu'>
					<div className='is-divider' data-content='Services'></div>
					<SideBarOption></SideBarOption>
					<div className='is-divider' data-content='Rooms'></div>
					<SideBarRoom></SideBarRoom>
				</aside>
			</div>
		</div>
	);
}

export default SideBar;
