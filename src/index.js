import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AlertDialogProvider from "./app/components/common/AlertDialogProvider";
import App from './App';
import store from './features/store';

ReactDOM.render(
    <React.StrictMode>
        <AlertDialogProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </AlertDialogProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
