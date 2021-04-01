import FeatherIcon from 'feather-icons-react';
import React from 'react';
import './RoomFooter.scss';

function RoomFooter() {
	const sendRef = React.useRef();
	const sendMessage = (e) => {
		e.preventDefault();
		alert(sendRef.current.value);
		sendRef.current.value = '';
	};
	return (
		<div className='column is-centered has-icons-left'>
			<div className='control has-icons-left has-icons-right mx-3 mb-3'>
				<form onSubmit={sendMessage}>
					<input className='input is-primary' type='text' placeholder={`Enter your message...`} ref={sendRef} />
					<span className='icon is-small is-right'>
						<FeatherIcon
							className='fav-icon'
							icon='send'
							size='24'
							onClick={() => {
								sendMessage();
							}}
						/>
					</span>
				</form>
			</div>
		</div>
	);
}

export default RoomFooter;
