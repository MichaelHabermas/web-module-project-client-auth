import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		headers: {
			Authorization: token
		}
	});
};

// import { axiosWithAuth } from '../axiosAuth.js';

// axiosWithAuth()
//     .get('endpoint/path/here')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
