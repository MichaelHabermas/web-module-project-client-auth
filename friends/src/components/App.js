import React from 'react';
import '../css/App.css';
import { Route, Link } from 'react-router-dom';

// components
import Public from './Public.js';
import Login from './Login.js';
import { PrivateRoute } from './Protected.js';

function App() {
	return (
		<div>
			<ul>
				<li>
					<Link to="/public">Public Page</Link>
				</li>
				<li>
					<Link to="/protected">Protected Page</Link>
				</li>
			</ul>

			<Route path="/public" component={Public} />
			<Route path="/login" component={Login} />
			<PrivateRoute path="/protected" component={PrivateRoute} />
		</div>
	);
}

export default App;
