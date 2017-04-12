import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common/index.js';
import firebase from 'firebase';

class LoginForm extends Component {
	state = { email: '', password: '' };

	onButtonPress(){
		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword( email, password );
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
						secureTextEntryStatus={true}
					/>
				</CardSection>


				<CardSection >
					<Button onPress={this.onButtonPress.bind(this)}> Login </Button>
				</CardSection >
			</Card>
		);
	}
}

export default LoginForm;
