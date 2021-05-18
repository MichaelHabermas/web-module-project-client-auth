import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';

const Login = props => {
	const [credentials, setCredentials] = useState({ username: '', password: '' });

	const login = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('login/endpoint', credentials)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				this.props.history.push('/');
			})
			.catch(err => {
				console.log(err);
			});
	};

	// const login = () => {
	//   axios.post('endpoint/here', userCredentials)
	//     .then(res => {
	//       localStorage.setItem('token', res.data.token);
	//       props.history.push('/dashboard');
	//     }
	//     .catch(err => {
	//         console.log(err)
	//     })
	// }

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
