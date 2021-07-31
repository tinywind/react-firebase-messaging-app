import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import FeatherIcon from 'feather-icons-react';
import firebase from 'firebase/app';
import React, {useRef, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, firestore} from '../../../features/firebase';
import Loading from '../../components/common/Loading';

export default function Footer(props) {
    const inputRef = useRef();
    const [user] = useAuthState(auth);
    const [showPicker, setShowPicker] = useState(false);

    const appendEmoji = (emoji) => {
        inputRef.current.value += emoji.native;
        setShowPicker(false);
        inputRef.current.focus();
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (!props.roomId || !inputRef.current.value)
            return;

        firestore.collection('rooms')
            .doc(props.roomId)
            .collection('messages')
            .add({
                message: inputRef.current.value,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                sender: user?.displayName,
                avatar: user?.photoURL,
            })
            .catch(e => console.log(e));

        inputRef.current.value = '';
    };

    return props.loading || !props.roomId
        ? <Loading loading={props.loading}/>
        : <div className='column is-centered has-icons-left'>
            <div className='control has-icons-left has-icons-right mx-3 mb-3'>
                <form onSubmit={sendMessage}>
                    <input className='input is-primary' type='text' placeholder={`Enter your message...`} ref={inputRef}/>
                    <div className='icon is-left'><FeatherIcon icon='send' size='24'/></div>
                    <div className='icon is-small is-right'>
                        <button type='submit' onClick={() => setShowPicker(true)}><FeatherIcon className='fav-icon' icon='smile' size='24'/></button>
                        {showPicker &&
                        <div style={{position: 'absolute', bottom: 10, right: 10}}>
                            <Picker emoji='' title='' native={true} onSelect={appendEmoji}/>
                        </div>}
                    </div>
                </form>
            </div>
        </div>;
}
