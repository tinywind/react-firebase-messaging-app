import React, {useEffect, useRef} from 'react';
import FeatherIcon from "feather-icons-react";
import Loading from './../common/Loading';

function Body(props) {
    const roomId = props.roomId;
    const chatMessages = props.chatMessages;
    const messageRef = useRef();

    useEffect(() => {
        messageRef?.current?.scrollIntoView(false);
    }, [roomId, chatMessages]);

    // TODO: the style using the className does not work correctly for some reason
    return (
        props.loading
            ? <Loading loading={true}/>
            : <div style={{width: '99%', maxHeight: '80vh', height: '80vh', overflowX: 'scroll'}}>
                <ul ref={messageRef}>
                    {props.chatMessages?.docs.map((doc) => {
                        const {message, timeStamp, sender, avatar} = doc.data();
                        return (
                            <li key={timeStamp} className={`bubble columns`}>
                                <div>
                                    <div className='columns'>
                                        <div className='column is-narrow'>
                                            <div className='columns is-mobile is-multiline'>
                                                <div className='column is-narrow '>
                                                    <figure className='image is-64x64'>
                                                        {avatar ? <img className='is-rounded flex-start' src={avatar} alt={avatar}/> : <FeatherIcon icon='smile' size='24'/>}
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='column  has-text-dark'>
                                            <div className=' ml-4 is-4'>
                                                <span className='tag is-warning is-light is-size-7'>{sender}:</span>
                                                <span className='tag is-warning is-light is-size-7'>{timeStamp?.toDate().toLocaleTimeString().toLowerCase()}</span>
                                            </div>
                                            <div className='column is-12 my-0'>
                                                <div className='has-text-6'>{message}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
    );
}

export default Body;
