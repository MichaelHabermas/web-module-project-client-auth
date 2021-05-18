import React, { useState } from 'react';
import '../css/App.css';
import { Route, Switch, Link } from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosAuth';

// components
import Public from './Public.js';
import Login from './Login.js';
import Friends from './Friends.js';
import { PrivateRoute } from './PrivateRoute.js';

function App() {
	const flexStyle = {
		display: 'flex',
		padding: '0 1rem'
	};

	const logout = () => {
		// axiosWithAuth()
		// 	.post('http://localhost:5000/')
		// 	.then(res => {
		localStorage.removeItem('token');
		window.location.href = '/public';
		// })
		// .catch(err => {
		// 	console.log(err);
		// });
	};

	return (
		<div>
			<div style={flexStyle}>
				<h1>Welcome to the Show!</h1>
				<ul style={flexStyle}>
					<li style={flexStyle}>
						<Link to="/public">Public Page</Link>
					</li>
					<li style={flexStyle}>
						<Link to="/login">Login</Link>
					</li>
					<li style={flexStyle}>
						<Link onClick={logout}>Logout</Link>
					</li>
					<li style={flexStyle}>
						{localStorage.getItem('token') ? (
							<Link to="/protected">Friends</Link>
						) : (
							<div>Please Log in</div>
						)}
					</li>
				</ul>
			</div>

			<Switch>
				<Route path="/public" component={Public} />
				<Route path="/login" component={Login} />
				<PrivateRoute path="/protected" component={Friends} />
			</Switch>
		</div>
	);
}

export default App;
