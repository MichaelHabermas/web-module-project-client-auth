import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosAuth';
import axios from 'axios';

const Login = props => {
	const [credentials, setCredentials] = useState({ username: 'Lambda School', password: 'i<3Lambd4' });
	const [loading, setLoading] = useState(false);

	if (loading) return <h3>Loading...</h3>;

	// doesn't use axiosWithAuth because this attempt happens BEFORE you get inside the walls
	const login = e => {
		e.preventDefault();
		setLoading(true);
		axios
			.post('http://localhost:5000/api/login', credentials)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/protected');
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};
	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div>
			<form onSubmit={login}>
				<input type="text" name="username" value={credentials.username} onChange={handleChange} />
				<input type="password" name="password" value={credentials.password} onChange={handleChange} />
				<button>Log in</button>
			</form>
		</div>
	);
};

export default Login;
