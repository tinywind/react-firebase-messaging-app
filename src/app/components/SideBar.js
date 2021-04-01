import React from 'react';
import './SideBar.scss';

function SideBar() {
	return (
		<div className='is-max-height side-bar-custom pr-0 mr-0'>
			<div className='column is-sidebar-menu is-flat'>
				<aside className='menu'>
					<div className='is-divider' data-content='Services'></div>
					<h4 class='subtitle is-4'>Anonymous user!</h4>

					<div className='is-divider' data-content='Rooms'></div>
					<h6 class='subtitle is-6'>Room 1</h6>
					<h6 class='subtitle is-6'>Room 2</h6>
				</aside>
			</div>
		</div>
	);
}

export default SideBar;
