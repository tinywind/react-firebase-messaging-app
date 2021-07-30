import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';
import Main from "./app/pages/Main";
import Login from './app/pages/Login';
import './App.scss';

export default function App() {
    const [user] = useAuthState(auth);
    return (user ? <Main/> : <Login/>);
}
