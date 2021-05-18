import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth';

const initialNewFriend = {
	name: '',
	age: '',
	email: ''
};

export default function Friends({ setLoading }) {
	const [friends, setFriends] = useState([]);
	const [newFriend, setNewFriend] = useState(initialNewFriend);

	// const [loading, setLoading] = useState(false);
	// if (loading === false) return <h3>Loading...</h3>;

	useEffect(() => {
		getData();
		// eslint-disable-next-line
	}, []);

	const getData = () => {
		// setLoading(true);
		axiosWithAuth()
			.get('http://localhost:5000/api/friends')
			.then(res => {
				setFriends(res.data);
				// setLoading(false);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const handleChange = e => {
		setNewFriend({
			...newFriend,
			[e.target.name]: e.target.value
		});
	};

	const handleNewFriend = () => {
		const newestFriend = {
			...newFriend,
			id: Math.random()
		};
		axiosWithAuth()
			.post('http://localhost:5000/api/friends', newestFriend)
			.then(res => {
				setFriends(res.data);
			})
			.catch(err => {
				console.log(err);
			});
		setNewFriend(initialNewFriend);
	};

	const friendStyle = {
		padding: '2rem',
		margin: '1rem',
		border: '2px solid red',
		borderRadius: '40px',
		width: '20%'
	};

	return (
		<div>
			<form onSubmit={handleNewFriend}>
				<h3>Add a Friend: </h3>
				<label>
					Name:
					<input type="text" name="name" value={newFriend.name} onChange={handleChange} />
				</label>
				<label>
					Age:
					<input type="text" name="age" value={newFriend.age} onChange={handleChange} />
				</label>
				<label>
					Email:
					<input type="email" name="email" value={newFriend.email} onChange={handleChange} />
				</label>
				<button>Log in</button>
			</form>

			{friends.map(friend => {
				return (
					<div key={Math.random()} style={friendStyle}>
						<h2>{friend.name}</h2>
						<h4>Age: {friend.age}</h4>
						<h5>Email: {friend.email}</h5>
					</div>
				);
			})}
		</div>
	);
}
