import React, { useEffect, useRef } from 'react';
import Loading from './../common/Loading';
import './RoomMain.scss';

function RoomMain(props) {
	const RoomId = props.RoomId;
	const IsLoading = props.IsLoading;
	const ChatMessages = props.ChatMessages;
	const MessageRef = useRef();

	useEffect(() => {
		MessageRef?.current?.scrollIntoView(false);
	}, [RoomId, ChatMessages]);

	if (IsLoading) {
		return (
			<ul>
				<Loading IsLoading={IsLoading} />
			</ul>
		);
	} else {
		return (
			//to-do - FIX - the style using the className does not work correctly for some reason
			<>
				<div style={{ width: '99%', maxHeight: '80vh', height: '80vh', overflowX: 'scroll' }}>
					<ul ref={MessageRef}>
						{props.ChatMessages?.docs.map((doc) => {
							const { message, timeStamp, sender, avatar } = doc.data();
							return (
								<li key={timeStamp} className={`bubble columns`}>
									<div>
										<div className='columns'>
											<div className='column is-narrow'>
												<div className='columns is-mobile is-multiline'>
													<div className='column is-narrow '>
														<figure className='image is-64x64'>
															<img className='is-rounded flex-start' src={!avatar ? 'https://bulma.io/images/placeholders/64x64.png' : avatar} alt={avatar} />
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
			</>
		);
	}
}

export default RoomMain;
