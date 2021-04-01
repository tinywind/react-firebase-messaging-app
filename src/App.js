import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Login from './app/pages/Login';

function App() {
	const user = { name: 'Anonymous' };

	return (
		<>
			<Router>
				{!user ? (
					<Login />
				) : (
					<Switch>
						<Route path='/' exact>
							<h1 class='title is-primary-text'>Welcome to BizWiz</h1>
						</Route>
					</Switch>
				)}
			</Router>
		</>
	);
}

export default App;
