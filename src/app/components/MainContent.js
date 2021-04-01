import React from 'react';
import RoomFooter from './maincontent-child/RoomFooter';
import RoomHeader from './maincontent-child/RoomHeader';
import RoomMain from './maincontent-child/RoomMain';
import './MainContent.scss';
function MainContent() {
	return (
		<>
			<RoomHeader></RoomHeader>
			<RoomMain></RoomMain>
			<RoomFooter></RoomFooter>
		</>
	);
}

export default MainContent;
