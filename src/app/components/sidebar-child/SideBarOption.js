/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Dialog from '../common/Dialog';
import './SideBarOption.scss';

function SideBarOption() {
	const [isShowing, setIsShowing] = useState(false);

	const openDialogHandler = () => {
		setIsShowing(true);
	};

	const closeDialogHandler = () => {
		setIsShowing(false);
	};

	return (
		<>
			<ul className='menu-list'>
				<li>
					<a className='links' onClick={openDialogHandler}>
						Saved Conversations
					</a>
				</li>
				<li>
					<a className='links' onClick={openDialogHandler}>
						Your Groups
					</a>
				</li>
			</ul>
			<Dialog className='modal' show={isShowing} close={closeDialogHandler} buttonText='Okay'>
				<div className='is-size-6 my-2'>This feature will be available soon...</div>
			</Dialog>
		</>
	);
}

export default SideBarOption;
