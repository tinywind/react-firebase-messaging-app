import FeatherIcon from 'feather-icons-react';
import React, {useContext, useRef, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../features/firebase';
import logo from './../images/applogo-nav.svg';
import {AlertDialogContext} from "./common/AlertDialogProvider";

export default function Header() {
    const [expendedMiniBar, setExpendedMiniBar] = useState(false);
    const searchRef = useRef();
    const [user] = useAuthState(auth);
    const alertContext = useContext(AlertDialogContext);
    const showAlert = () => alertContext.show(<div className='is-size-6 my-2'>This feature will be available soon...</div>);

    return (
        <nav className='navbar navbar-low-line' role='navigation' aria-label='main navigation'>
            <div className='column is-2'>
                <div>
                    <img src={logo} alt='BizWiz Logo' width='125' height='40'/>
                </div>
                <div>
                    <button type='button' className={`navbar-burger icon is-left burger ${expendedMiniBar ? 'is-active' : ''}`} onClick={() => setExpendedMiniBar(!expendedMiniBar)}>
                        <span aria-hidden='true'/>
                        <span aria-hidden='true'/>
                        <span aria-hidden='true'/>
                    </button>
                </div>
            </div>
            <div className='column is-centered has-icons-left'>
                <div className='control has-icons-left has-icons-right mx-3 mt-1'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        showAlert();
                    }}>
                        <input className='input is-primary' type='text' placeholder='Search your wiz' ref={searchRef}/>
                        <span className='icon is-left'><FeatherIcon icon='search' size='24'/></span>
                        <span className='icon is-small is-right'><FeatherIcon icon='corner-down-left' size='24'/></span>
                    </form>
                </div>
            </div>
            <div className={`navbar-menu column is-narrow ${expendedMiniBar ? 'is-active' : ''}`}>
                <div className='navbar-end'>
                    <div className='navbar-item has-dropdown is-hoverable'>
                        <span className='navbar-link'>Welcome {user?.displayName}</span>
                        <div className='navbar-dropdown'>
                            <button type='button' className='navbar-item is-flex-wrap-nowrap' onClick={showAlert}>
                                <FeatherIcon icon='user' size='24'/>
                                <div className='mx-2'>Your Profile</div>
                            </button>
                            <button type='button' className='navbar-item' onClick={showAlert}>
                                <FeatherIcon icon='settings' size='24'/>
                                <div className='mx-2'>Edit Settings</div>
                            </button>
                            <hr className='navbar-divider'/>
                            <button type='button' className='navbar-item' onClick={() => auth.signOut()}>
                                <FeatherIcon icon='log-out' size='24'/>
                                <div className='mx-2'>Logout</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
