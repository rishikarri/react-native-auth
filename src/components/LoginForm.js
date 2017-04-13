import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

import { Button, Card, CardSection, Input, Spinner } from './common/index.js';


class LoginForm extends Component {
	state = { email: '', password: '', error: 'ds', loading: false };
	

	onButtonPress() {

		console.log('this button is lit');
		this.setState({ error: '', loading: true});
		
		const { email, password } = this.state;
		// attempt to sign user in 
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => { 
				// if we get an error, we enter this function
				// we should attempt to create a user account 
				firebase.auth().createUserWithEmailAndPassword(email, password)	
					.then(this.onLoginSuccess.bind(this))				
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed',
			loading: false,

		})
	}

	onLoginSuccess() {
		this.setState({
			errror: '',
			loading: false,
			email: '', 
			password: '' 
		})
	}

	renderButton() {		
		if (this.state.loading) {
			return <Spinner sizeOfSpinner="small" />;
		} 

		return (
			<Button whenPressed={this.onButtonPress.bind(this)}> Login </Button>
		);	
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


				<CardSection>
					{this.renderButton()}
				</CardSection>
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
