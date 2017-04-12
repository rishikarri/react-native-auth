import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common/index.js';
import firebase from 'firebase';

class LoginForm extends Component {
	state = { email: '', password: '', error: '' };

	onButtonPress(){
		const { email, password } = this.state;
		// attempt to sign user in 
		firebase.auth().signInWithEmailAndPassword( email, password )
			.catch(() =>{
				// if we get an error, we enter this function
				// we should attempt to create a user account 
				firebase.auth().createUserWithEmailAndPassword(email, password);
					.catch(() => {
						// need to show the user that there is an error because they haven't been able to sign in 
						this.setState({
							error: 'Authentication failed'
						})
					})

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
