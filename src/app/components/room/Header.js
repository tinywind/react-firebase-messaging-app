import FeatherIcon from 'feather-icons-react';
import React, {useState} from 'react';

export default function Header(props) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <nav className='navbar is-primary px-5' style={{zIndex: 1}}>
            <div id='innerMenu' className='navbar-menu'>
                <div className='navbar-start'>
                    <div className='navbar-item'>
                        <FeatherIcon icon='star' fill={isFavorite ? 'white' : ''} size='18' className='mr-3' onClick={() => setIsFavorite(!isFavorite)}/>
                        <span>{props.roomName}</span>
                    </div>
                </div>
                <div className='navbar-end'/>
            </div>
        </nav>
    );
}
