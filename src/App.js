import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './app/components/Header';
// import Footer from './app/components/Footer'; -- use it later
import MainContent from './app/components/MainContent';
import SideBar from './app/components/SideBar';
import Login from './app/pages/Login';
function App() {
	const user = null; //{ name: 'Anonymous' };

	return (
		<>
			<Router>
				{!user ? (
					<Login />
				) : (
					<Switch>
						<Route path='/' exact>
							<div>
								<Header></Header>
								<div className='columns'>
									<div className='column  px-0 py-0 mx-0 is-narrow'>
										<SideBar></SideBar>
									</div>
									<div className='column  px-0 mx-0 is-lowest'>
										<MainContent></MainContent>
									</div>
								</div>
							</div>
						</Route>
					</Switch>
				)}
			</Router>
		</>
	);
}

export default App;
