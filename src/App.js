import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Login from './app/pages/Login';

function App() {
	const user = null;

	return (
		<>
			<Router>
				{!user ? (
					<Login />
				) : (
					<Switch>
						<Route path='/' exact>
							<div>Welcome tp BizWiz</div>
						</Route>
					</Switch>
				)}
			</Router>
		</>
	);
}

export default App;
