/* eslint-disable jsx-a11y/anchor-is-valid */
import FeatherIcon from 'feather-icons-react';
import React, { useRef, useState } from 'react';
import applogo from './../images/logo.svg';
import './Header.scss';

function Header() {
	const [isActive, setIsActive] = useState(false);
	const searchRef = useRef();

	const getLoggedInUser = () => {
		/*will use, once the auth module in place*/
	};
	const signOut = () => {
		/*will use, once the auth module in place*/
	};

	return (
		<>
			<nav className='navbar navbar-low-line' role='navigation' aria-label='main navigation'>
				<div className='column is-2'>
					<div>
						<img src={applogo} alt='BizWiz Logo' width='40' height='40' />
					</div>
					<div>
						<a
							href='#'
							onClick={() => {
								setIsActive(!isActive);
							}}
							role='button'
							className={`navbar-burger icon is-left burger ${isActive ? 'is-active' : ''}`}
							aria-label='menu'
							aria-expanded='false'
							data-target='mainBar'>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
						</a>
					</div>
				</div>
				<div className='column is-centered has-icons-left'>
					<div className='control has-icons-left has-icons-right mx-3 mt-1'>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								alert(searchRef.current.value);
							}}>
							<input className='input is-primary' type='text' placeholder='Search your wiz' ref={searchRef} />
							<span className='icon is-left '>
								<FeatherIcon icon='search' size='24' />
							</span>
							<span className='icon is-small is-right'>
								<FeatherIcon icon='corner-down-left' size='24' />
							</span>
						</form>
					</div>
				</div>

				<div id='mainBar' className={`navbar-menu column is-narrow ${isActive ? 'is-active' : ''}`}>
					<div className='navbar-end'>
						<div className='navbar-item has-dropdown is-hoverable'>
							<a className='navbar-link '>Welcome {getLoggedInUser()}</a>
							<div className='navbar-dropdown'>
								<a className='navbar-item is-flex-wrap-nowrap	'>
									<FeatherIcon icon='user' size='24' />
									<div className='mx-2'>Your Profile</div>
								</a>
								<a className='navbar-item'>
									<FeatherIcon icon='settings' size='24' />
									<div className='mx-2'>Edit Settings</div>
								</a>
								<hr className='navbar-divider' />
								<a className='navbar-item'>
									<FeatherIcon icon='log-out' size='24' />
									<div className='mx-2' onClick={signOut}>
										Logout
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
