import React, {useState} from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Room from "../components/Room";

export const RoomContext = React.createContext(null);

export default function Main() {
    const [roomId, setRoomId] = useState(null);

    return (
        <main>
            <Header/>
            <RoomContext.Provider value={{roomId: roomId, setRoomId: setRoomId}}>
                <div className='columns'>
                    <div className='column px-0 py-0 mx-0 is-narrow'>
                        <Sidebar/>
                    </div>
                    <div className='column px-0 mx-0 is-lowest'>
                        <Room/>
                    </div>
                </div>
            </RoomContext.Provider>
        </main>
    );
}
