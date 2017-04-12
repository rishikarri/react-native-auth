import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import { Button, Card, CardSection, Input } from './common/index.js';


class LoginForm extends Component {
	state = { email: '', password: '', error: 'ds' };
	

	onButtonPress() {
		console.log('this button is lit');
		this.setState({ error: ''})
		
		const { email, password } = this.state;
		// attempt to sign user in 
		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => { 
				// if we get an error, we enter this function
				// we should attempt to create a user account 
				firebase.auth().createUserWithEmailAndPassword(email, password)					
					.catch(() => {
						// need to show the user that there is an error because they haven't been able to sign in 
						console.log('hi hi auth failed');
						this.setState({ error: 'Authentication failed' });
					});
			});
	}

	render() {

		return (
			<Card>				

				<CardSection>
					<Input 
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
						label="Email"
						placeholder="user@gmail.com"
						secureTextEntryStatus={false}
					/>
					
				</CardSection>

				<CardSection>
					<Input
						placeholder="password"
						value={this.state.password}
						onChangeText={passwordTextUserJustEntered => this.setState({ password: passwordTextUserJustEntered })}
						label="Password"
						secureTextEntryStatus
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>
					{this.state.error}
				</Text>


				<CardSection >
					<Button whenPressed={this.onButtonPress.bind(this)}> Login </Button>
				</CardSection >
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20, 
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
