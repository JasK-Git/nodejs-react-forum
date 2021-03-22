import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import NavbarComponent from '../Navbar/Navbar.js';

const LoginPage = (props) => {
	const history = useHistory();

	async function handleClick (e) {
		e.preventDefault();
		const formElement = document.querySelector('form');
		const formData = new FormData(formElement);
		const username = formData.get('username');
		const password = formData.get('password');
		const res = await fetch('/token', {
			'headers': {
				'Content-Type': 'application/json'
			},
			'method': 'POST',
			'body': JSON.stringify({
				username,
				password
			})
		});
		if (res.status === 200) {
			history.push('/');
		}
	}
	return (
		<>
			<NavbarComponent/>
			<div style = {{ 'margin-left': '20%', 'margin-right': '20%', 'margin-top': '2%', 'padding': '2em' }} className = 'card'>
				<Form id = 'addPostForm' onSubmit = {handleClick}>
					<div className = 'form-group'>
						<label>Username</label>
						<Form.Control name = 'username' className ='form-control' id='username' placeholder='Enter username'/>
					</div>
					<div className ='form-group'>
						<label>Password</label>
						<Form.Control name = 'password' className ='form-control' id='password' placeholder='Enter password'/>
					</div>
					<button type = 'submit' className ='btn btn-primary'>Submit</button>
				</Form>
			</div>
		</>
	);
};

export default LoginPage;
