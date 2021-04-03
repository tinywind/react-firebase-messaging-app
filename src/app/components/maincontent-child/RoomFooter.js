import { EmojiData, Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import FeatherIcon from 'feather-icons-react';
import firebase from 'firebase';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';
import Loading from '../../components/common/Loading';
import './RoomFooter.scss';

function RoomFooter(props) {
	const sendRef = React.useRef();
	const [user] = useAuthState(auth);

	const [showPicker, setShowPicker] = useState(false);

	const addEmoji = (emoji: EmojiData) => {
		if ('native' in emoji) {
			sendRef.current.value += emoji.native;
			setShowPicker(false);
			sendRef.current.focus();
		}
	};

	const sendMessage = (e) => {
		e.preventDefault();
		//check the room id - reference and valid message value ( to-do use language filter and/or e2e encryption etc)
		if (!props.RoomId || sendRef.current.value === '') {
			return;
		}

		db.collection('rooms').doc(props.RoomId).collection('messages').add({
			message: sendRef.current.value,
			timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
			sender: user?.displayName,
			avatar: user?.photoURL,
		});

		sendRef.current.value = '';
	};
	if (props.IsLoading || !props.RoomId) {
		return (
			<ul>
				<Loading IsLoading={props.IsLoading} />
			</ul>
		);
	} else {
		return (
			<div className='column is-centered has-icons-left'>
				<div className='control has-icons-left has-icons-right mx-3 mb-3'>
					<form onSubmit={sendMessage}>
						<input className='input is-primary' type='text' placeholder={`Enter your message...`} ref={sendRef} />
						<span className='icon is-left '>
							<FeatherIcon icon='send' size='24' />
						</span>{' '}
						<span className='icon is-small is-right'>
							<FeatherIcon
								className='fav-icon'
								icon='smile'
								size='24'
								onClick={() => {
									setShowPicker(true);
								}}
							/>
							{showPicker && (
								<div style={{ position: 'absolute', bottom: 10, right: 10 }}>
									<Picker emoji='' title='' native={true} onSelect={addEmoji} />
								</div>
							)}
						</span>
					</form>
				</div>
			</div>
		);
	}
}

export default RoomFooter;
