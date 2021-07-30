import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Room from "../components/Room";

export default function Main() {
    return (
        <main>
            <Header/>
            <div className='columns'>
                <div className='column px-0 py-0 mx-0 is-narrow'>
                    <Sidebar/>
                </div>
                <div className='column px-0 mx-0 is-lowest'>
                    <Room/>
                </div>
            </div>
        </main>
    );
}
